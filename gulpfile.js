/* ================
// Required Plugins
// ============= */

var site = 'dist/';
var gulp = require('gulp'),
    configuration = require('./configuration'),
    browserSync = require('browser-sync').create(),
    changed = require('gulp-changed'),
    jade = require('gulp-jade'),
    postcss = require('gulp-postcss'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite');


/* ================
// Compile Jade
// ============= */

gulp.task('jade', ['sprite'], function() {

  return gulp.src('src/jade/pages/*.jade')
    .pipe(jade({
      locals: {
        pageTitle: configuration.name
      },
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());

});


/* ================
// Compile Postcss
// ============= */

gulp.task('postcss', function() {

  return gulp.src('src/postcss/site.css')
    .pipe(postcss([
      require('postcss-import'),
      require('postcss-mixins')({
        mixins: {
          collage: function(mixin, xspan, yspan, xpoint, ypoint, xmax, ymax) {
            return {
              top: ypoint / ymax * 100 + '%',
              left: xpoint / xmax * 100 + '%',
              height: yspan / ymax * 100 + '%',
              width: xspan / xmax * 100 + '%'
            }
          }
        }
      }),
      require('postcss-nesting'),
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
        browsers: ['last 8 versions'],
        cascade: false
      })
    ]))
    .pipe(gulp.dest(site + 'css'))
    .pipe(browserSync.stream())
    .pipe(cleanCss({
      keepSpecialComments: 0,
      restructuring: false
    }))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(site + 'css'))
    .pipe(browserSync.stream());

});


/* ================
// Compile JS
// ============= */

gulp.task('js', function() {

  return gulp.src('src/js/**/*.js')
    .pipe(concat('site.js'))
    .pipe(gulp.dest(site + 'js'))
    .pipe(browserSync.stream())
    .pipe(uglify({
      mangle: false
    }))
    .pipe(rename(function(path) {
      path.basename += '.min';
    }))
    .pipe(gulp.dest(site + 'js'))
    .pipe(browserSync.stream());

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

  return gulp.src('src/svg/*')
    .pipe(svgSprite({
      shape: {
        dimension: {
          maxWidth: 300,
          maxHeight: 300
        }
      },
      mode: {
        inline: true,
        symbol: {
          bust: false,
          dest: './'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false,
        dimensionAttributes: false
      }
    }))
    .pipe(gulp.dest(site))
    .pipe(browserSync.stream());

});


/* ================
// Sync Changes
// ============= */

gulp.task('browser-sync', function() {

  browserSync.init({
    logPrefix: configuration.name,
    server: {
      baseDir: './',
    }
  });

});


/* ================
// Watch Task
// ============= */

gulp.task('watch', function() {

  gulp.watch('src/jade/**/*.jade', ['jade']);
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
  'jade',
  'watch',
  'browser-sync'
]);
