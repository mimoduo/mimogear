/* ================
// Required Plugins
// ============= */

var site = 'dist/';
var gulp = require('gulp'),
    packageJSON = require('./package.json'),
    configuration = require('./configuration.json'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    svgSprite = require('gulp-svg-sprite');


/* ================
// Compile Pug
// ============= */

gulp.task('pug', ['sprite'], function() {

  return gulp.src('src/pug/pages/**/*.pug')
    .pipe(pug({
      locals: {
        siteTitle: packageJSON.name,
        siteDescription: packageJSON.description,
        siteLinks: configuration.links
      },
      pretty: true
    }))
    .pipe(gulp.dest('./'))
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
    .pipe(cssnano())
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

  return gulp.src([
    'src/js/vendor/*.js',
    'src/js/mimo/*.js',
    'src/js/site/*.js'
  ])
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
