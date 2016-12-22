/* ================
// Required Plugins
// ============= */

var gulp = require('gulp'),
    packageJSON = require('./package.json'),
    configuration = require('./configuration.json'),
    browserSync = require('browser-sync').create(),
    minimist = require('minimist'),
    util = require('gulp-util'),
    gulpif = require('gulp-if'),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    extReplace = require('gulp-ext-replace'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite'),
    deploy = require('gulp-gh-pages');


/* ================
// Setup Environment
// ============= */

var site = 'dist/';

var options = minimist(process.argv.slice(2));

var files = './dist/',
    production = false;

if (options.base) {
  files = './';
}

if (options.production) {
  production = true;
}


/* ================
// Compile Pug
// ============= */

gulp.task('pug', ['sprite'], function() {

  return gulp.src('src/pug/pages/**/*.pug')
    .pipe(pug({
      locals: {
        siteTitle: packageJSON.name,
        siteDescription: packageJSON.description,
        siteLinks: configuration.links,
        base: files
      },
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(gulpif(production, gulp.dest(site)))
    .pipe(browserSync.stream({
      once: true
    }));

});


/* ================
// Compile Postcss
// ============= */

gulp.task('postcss', function() {

  return gulp.src('src/postcss/site.css')
    .pipe(postcss([
      require('postcss-easy-import')({
        glob: true
      }),
      require('postcss-mixins'),
      require('postcss-nested'),
      require('postcss-simple-grid')({
        separator: '-'
      }),
      require('postcss-simple-vars')({
        variables: configuration
      }),
      require('postcss-functions')({
        functions: {
          em: function(value, context) {
            if(context == null) {
              context = configuration.bodySize;
            }
            var emValue = value / context;
            return emValue + 'em';
          },
          rem: function(value) {
            var emValue = value / 16;
            return emValue + 'rem';
          },
          nu: function(value, context) {
            if(context == null) {
              context = configuration.bodySize;
            }
            var nuValue = value / context;
            return nuValue;
          }
        }
      }),
      require('autoprefixer')({
        browsers: ['> 1%'],
        cascade: false
      }),
      require('postcss-discard-empty')
    ]))
    .pipe(gulp.dest(site + 'css'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, cssnano()))
    .pipe(gulpif(production, extReplace('.min.css')))
    .pipe(gulpif(production, gulp.dest(site + 'css')))
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
    .pipe(gulp.dest(site + 'js'))
    .pipe(browserSync.stream())
    .pipe(gulpif(production, uglify({
      mangle: false
    })))
    .pipe(gulpif(production, extReplace('.min.js')))
    .pipe(gulpif(production, gulp.dest(site + 'js')))
    .pipe(gulpif(production, browserSync.stream()));

});


/* ================
// Optimize Images
// ============= */

gulp.task('images', function() {

  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest(site + 'images'))
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
          dest: site
        },
        view: {
          dest: site,
          bust: false
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
        padding: '4px',
        fontSize: '12px',
        borderBottomLeftRadius: '0'
      }
    }
  });

});


/* ================
// Deploy Task
// ============= */

gulp.task('deploy', [
  'images',
  'sprite',
  'postcss',
  'js',
  'pug'
], function () {

  return gulp.src('./dist/**/*')
    .pipe(deploy());

})


/* ================
// Watch Task
// ============= */

gulp.task('watch', function() {

  gulp.watch('src/pug/template.pug', ['pug']);
  gulp.watch('src/pug/**/*.pug', ['pug']);
  gulp.watch('src/postcss/**/*.css', ['postcss']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/images/*', ['images']);
  gulp.watch('src/svg/*', ['sprite']);

});


/* ================
// Default Gulp Task
// ============= */

gulp.task('default', [
  'images',
  'sprite',
  'postcss',
  'js',
  'pug',
  'watch',
  'browser-sync'
]);
