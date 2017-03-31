# Using Gulp in Mimogear

Gulp works in Mimogear by compiling stylesheets, compiling markup, concatenating and minifying javascript, creating a sprite, optimizing images, watching assets, and deploying files.

## Running Gulp

Once you're all [setup](https://github.com/mimoduo/mimogear/tree/master/docs), there's a default gulp task to get your started:

```sh
gulp
```

**This will automatically open your browser to your site, compile all of your development assets within /src/, and watch for any file changes in the source /src/ folder.**

## Running Optional Gulp Flags

There are a few flags available within gulp to help with deployment and speed up development. These can be added to a `gulp` command but for development only purposes they can be excluded.

* `--base`: tells pug to look in the root file path
* `--min`: tells pug to look for minified assets
* `--production`: tells gulp to run production facing minification tasks

## Specific Gulp Commands

Sometimes you may want to build only a particular set of files or watch without building. In that case, there are several tasks you can run.

```sh
gulp pug
gulp sass
gulp js
gulp images
gulp sprite
gulp ghPages
gulp surge
gulp watch
```

## Plugin List

If you'd like to modify some of the pre-existing tasks in Mimogear, check out the complete plugin list below:

* [**autoprefixer**](https://github.com/postcss/autoprefixer)
* [**browser-sync**](https://github.com/BrowserSync/browser-sync) / [official site](https://www.browsersync.io/)
* [**gulp**](https://github.com/gulpjs/gulp) / [official site](http://gulpjs.com/)
* [**gulp-cached**](https://github.com/contra/gulp-cached)
* [**gulp-changed**](https://github.com/sindresorhus/gulp-changed)
* [**gulp-concat**](https://github.com/contra/gulp-concat)
* [**gulp-cssnano**](https://github.com/ben-eb/gulp-cssnano) / [official site](http://cssnano.co/)
* [**gulp-ext-replace**](https://github.com/tjeastmond/gulp-ext-replace)
* [**gulp-gh-pages**](https://github.com/shinnn/gulp-gh-pages)
* [**gulp-if**](https://github.com/robrich/gulp-if)
* [**gulp-imagemin**](https://github.com/sindresorhus/gulp-imagemin)
* [**gulp-sass**](https://github.com/dlmanning/gulp-sass)
* [**gulp-sass-glob**](https://github.com/mikevercoelen/gulp-sass-glob)
* [**gulp-postcss**](https://github.com/postcss/gulp-postcss) / [official site](http://postcss.org/)
* [**gulp-pug**](https://github.com/jamen/gulp-pug)
* [**gulp-pug-inheritance**](https://github.com/pure180/gulp-pug-inheritance)
* [**gulp-surge**](https://github.com/surge-sh/gulp-surge)
* [**gulp-svg-sprite**](https://github.com/jkphl/gulp-svg-sprite)
* [**gulp-uglify**](https://github.com/terinjokes/gulp-uglify)
* [**gulp-util**](https://github.com/gulpjs/gulp-util)
* [**jstransformer-markdown**](https://github.com/jstransformers/jstransformer-markdown)
* [**minimist**](https://github.com/substack/minimist)
* [**postcss-discard-empty**](https://github.com/ben-eb/postcss-discard-empty)
* [**surge**](https://github.com/sintaxi/surge)
