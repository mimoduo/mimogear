/* ================
// Required Plugins
// ============= */

const { src, dest, lastRun, series, parallel, watch } = require('gulp');
var fs = require('fs'),
    reload = require('require-reload')(require),
    packageJSON = require('./package.json'),
    configuration = require('./configuration.json'),
    browserSync = require('browser-sync').create(),
    del = require('del'),
    minimist = require('minimist'),
    gulpif = require('gulp-if'),
    cached = require('gulp-cached'),
    changed = require('gulp-changed'),
    pug = require('gulp-pug'),
    pugInheritance = require('gulp-pug-inheritance'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    cssnano = require('gulp-cssnano'),
    extReplace = require('gulp-ext-replace'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite'),
    ghPages = require('gulp-gh-pages'),
    surge = require('gulp-surge');


/* ================
// Setup Environment
// ============= */

var dist = 'dist/',
    base = './' + dist,
    min = '',
    production = false;

var options = minimist(process.argv.slice(2));

if (options.base) base = './';
if (options.min) min = '.min';
if (options.production) production = true;


/* ================
// Compile Pug
// ============= */

var pugLocals = {
  siteTitle: packageJSON.name,
  siteDescription: packageJSON.description,
  siteLinks: configuration.links,
  base: base,
  min: min,
  gallery: []
};

function renameFile(file) {
  var name = file.replace('-', ' ')
  name = name.substring(0, name.indexOf('.'));

  return name;
}

function readGallery(dir, key, nest) {
  fs.readdir(dir, function(err, images) {
    if(err) return console.error(err);

    if(key == null) key = 'root';
    if(nest == null) nest = '';

    pugLocals.gallery[key] = [];

    for(var i in images) {
      if(fs.statSync(dir + '/' + images[i]).isDirectory()) {
        readGallery(dir + '/' + images[i], images[i], images[i] + '/');
      } else {
        var name = renameFile(images[i]);

        pugLocals.gallery[key].push({
          file: nest + images[i],
          name: name
        });
      }
    }
  });
}

function gallery(done) {
  pugLocals.gallery = {};

  readGallery('src/images/');

  done();
}

function compilePug() {
  return src([
    'src/pug/pages/**/*.pug',
    '!src/pug/pages/**/_*.pug'
  ])
    .pipe(pug({
      locals: pugLocals,
      pretty: true
    }))
    .pipe(dest('./'))
    .pipe(gulpif(production, dest(dist)))
    .pipe(browserSync.stream());
}

function pugPages() {
  return src([
    'src/pug/pages/**/*.pug',
    '!src/pug/pages/**/_*.pug'
  ])
    .pipe(changed(dist, {
      extension: '.html'
    }))
    .pipe(cached('pug'))
    .pipe(pugInheritance({
      basedir: 'src/pug/pages',
      skip: 'node_modules'
    }))
    .pipe(pug({
      locals: pugLocals,
      pretty: true
    }))
    .pipe(dest('./'))
    .pipe(browserSync.stream());
}


/* ================
// Compile Sass
// ============= */

function compileSass() {
  return src('src/sass/site.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(dest(dist + 'css'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, postcss([
      require('autoprefixer')()
    ])))
    .pipe(gulpif(production, cssnano()))
    .pipe(gulpif(production, extReplace('.min.css')))
    .pipe(gulpif(production, dest(dist + 'css')))
    .pipe(gulpif(production, browserSync.stream()));
}


/* ================
// Compile JS
// ============= */

function compileJs() {
  return src([
    'src/js/vendor/*.js',
    'src/js/mimo/*.js',
    'src/js/site/*.js'
  ])
    .pipe(concat('site.js'))
    .pipe(dest(dist + 'js'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, uglify({
      mangle: false
    })))
    .pipe(gulpif(production, extReplace('.min.js')))
    .pipe(gulpif(production, dest(dist + 'js')))
    .pipe(gulpif(production, browserSync.stream()));
}


/* ================
// Optimize Images
// ============= */

function images() {
  return src('src/images/**/*')
    .pipe(changed(dist + 'images'))
    .pipe(imagemin())
    .pipe(dest(dist + 'images'))
    .pipe(browserSync.stream());
}


/* ================
// Create Sprite
// ============= */

function sprite() {
  return src('src/icons/*.svg')
    .pipe(svgSprite({
      mode: {
        inline: true,
        symbol: {
          dest: dist
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        dimensionAttributes: false
      }
    }))
    .pipe(dest('.'))
    .pipe(browserSync.stream());
}


/* ================
// Sync Changes
// ============= */

function runBrowserSync(done) {
  browserSync.init({
    logPrefix: packageJSON.name,
    ui: false,
    server: './',
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
        padding: '4px 8px',
        fontSize: '12px',
        borderBottomLeftRadius: '0'
      }
    }
  });

}

function reload(done) {
  browserSync.reload();

  done();
}


/* ================
// Reset Build
// ============= */

function reset(done) {
  try {
    packageJSON = reload('./package.json');
    configuration = reload('./configuration.json');
    pugLocals.siteLinks = configuration.links;
  } catch (e) {
    console.error("Failed to reload package.json! Error: ", e);
  }

  done();
}


/* ================
// Clean Dist
// ============= */

function clean(done) {
  del([
    '*.html',
    'dist/**',
    '!dist',
    '!dist/svg',
    '!dist/svg/**'
  ]);

  done();
}


/* ================
// Github Pages Deployment
// ============= */

function runGhPages() {
  return src('./dist/**/*')
    .pipe(ghPages());
}


/* ================
// Surge Direct Deployment
// ============= */

function runSurge() {
  return surge({
    project: './dist',
    domain: 'mimogear.surge.sh'
  });
}


/* ================
// Watch Files
// ============= */

function watchFiles() {
  watch(['configuration.json', 'package.json'], series(reset, series(
    images,
    sprite,
    compileSass,
    compileJs,
    gallery,
    compilePug
  )));
  watch(['src/pug/**/*.pug', '!src/pug/pages/**/*.pug'], series(compilePug));
  watch('src/pug/pages/**/*.pug', series(pugPages));
  watch('src/sass/**/*.scss', series(compileSass));
  watch('src/js/**/*.js', series(compileJs));
  watch('src/images/**/*', series(images, gallery));
  watch('src/icons/*', series(sprite));
}


/* ================
// Gulp Task Sets
// ============= */

exports.compilePug = compilePug;
exports.compileSass = compileSass;
exports.compileJs = compileJs;

exports.clean = clean;
exports.runGhPages = runGhPages;
exports.runSurge = runSurge;

exports.build = series(
  images,
  sprite,
  compileSass,
  compileJs,
  gallery,
  compilePug
);

exports.dev = parallel(
  watchFiles,
  runBrowserSync
);

exports.default = series(
  images,
  sprite,
  compileSass,
  compileJs,
  gallery,
  compilePug,
  parallel(
    watchFiles,
    runBrowserSync
  )
);