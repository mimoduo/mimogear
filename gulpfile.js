/* ================
// Required Plugins
// ============= */

var gulp = require('gulp'),
    fs = require('fs'),
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

gulp.task('gallery', function() {

  pugLocals.gallery = {};

  readGallery('src/images/');

});

gulp.task('pug', function() {

  return gulp.src([
    'src/pug/pages/**/*.pug',
    '!src/pug/pages/**/_*.pug'
  ])
    .pipe(pug({
      locals: pugLocals,
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(gulpif(production, gulp.dest(dist)))
    .pipe(browserSync.stream());

});

gulp.task('pug-pages', function() {

  return gulp.src([
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
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());

});


/* ================
// Compile Sass
// ============= */

gulp.task('sass', function() {

  return gulp.src('src/sass/site.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(dist + 'css'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, postcss([
      require('autoprefixer')({
        browsers: [
          '> 1%',
          'last 2 versions'
        ],
        cascade: false
      })
    ])))
    .pipe(gulpif(production, cssnano()))
    .pipe(gulpif(production, extReplace('.min.css')))
    .pipe(gulpif(production, gulp.dest(dist + 'css')))
    .pipe(gulpif(production, browserSync.stream()));

});


/* ================
// Compile JS
// ============= */

gulp.task('js', function() {

  return gulp.src([
    'src/js/vendor/*.js',
    'src/js/mimo/*.js',
    'src/js/site/*.js'
  ])
    .pipe(concat('site.js'))
    .pipe(gulp.dest(dist + 'js'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, uglify({
      mangle: false
    })))
    .pipe(gulpif(production, extReplace('.min.js')))
    .pipe(gulpif(production, gulp.dest(dist + 'js')))
    .pipe(gulpif(production, browserSync.stream()));

});


/* ================
// Optimize Images
// ============= */

gulp.task('images', function() {

  return gulp.src('src/images/**/*')
    .pipe(changed(dist + 'images'))
    .pipe(imagemin())
    .pipe(gulp.dest(dist + 'images'))
    .pipe(browserSync.stream());

});


/* ================
// Create Sprite
// ============= */

gulp.task('sprite', function() {

  return gulp.src('src/svg/*.svg')
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
    .pipe(gulp.dest('.'))
    .pipe(browserSync.stream());

});


/* ================
// Sync Changes
// ============= */

gulp.task('browser-sync', function() {

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

});

gulp.task('reload', function() {

	browserSync.reload();

});


/* ================
// Reset Build
// ============= */

gulp.task('reset', function() {

  try {
    packageJSON = reload('./package.json');
    configuration = reload('./configuration.json');
    pugLocals.siteLinks = configuration.links;
  } catch (e) {
    console.error("Failed to reload package.json! Error: ", e);
  }

});


/* ================
// Clean Dist
// ============= */

gulp.task('clean', function() {

  del([
    '*.html',
    'dist/**',
    '!dist',
    '!dist/svg',
    '!dist/svg/**'
  ]);

});


/* ================
// Github Pages Deployment
// ============= */

gulp.task('ghPages', ['clean', 'build'], function() {

  return gulp.src('./dist/**/*')
    .pipe(ghPages());

});


/* ================
// Surge Direct Deployment
// ============= */

gulp.task('surge', ['clean', 'build'], function() {

  return surge({
    project: './dist',
    domain: 'mimogear.surge.sh'
  });

});


/* ================
// Watch Files
// ============= */

gulp.task('watch', function() {

  gulp.watch(['configuration.json', 'package.json'], ['reset', 'build']);
  gulp.watch(['src/pug/**/*.pug', '!src/pug/pages/**/*.pug'], ['pug']);
  gulp.watch('src/pug/pages/**/*.pug', ['pug-pages']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/images/**/*', ['images', 'gallery']);
  gulp.watch('src/svg/*', ['sprite']);

});


/* ================
// Gulp Task Sets
// ============= */

gulp.task('build', [
  'images',
  'sprite',
  'sass',
  'js',
  'gallery',
  'pug'
]);

gulp.task('dev', [
  'watch',
  'browser-sync'
]);

gulp.task('default', [
  'build',
  'dev'
]);