#Using Gulp in Mimogear

All the work for compiling stylesheets, compiling markup, concatenating and minifying javascript, creating a sprite, optimizing images, and watching assets has already been setup for you.

##Running Gulp

Once you're all [setup](https://github.com/mimoduo/Mimogear/tree/master/docs), there's a default gulp task to get your started:

```sh
gulp
```

**This will automatically open your browser to your site, compile all of your development assets within /src/, and watch for any file changes in the source /src/ folder.**

##Advanced Gulp

There's an advanced gulp task that will minify assets to ready them for production. Simply pass in the `--production` flag to set an environment variable for gulp to use:

```sh
gulp --production
```

##Specific Gulp Commands

Sometimes you may want to build only a particular set of files or watch without building. In that case, there are several commands you can run. Tasks with `--production` towards the end indicate that the task will run minifying scripts.

```sh
gulp pug
gulp pug --production
gulp postcss
gulp postcss --production
gulp js
gulp js --production
gulp images
gulp sprite
gulp watch
```

##Plugin List

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
* [**gulp-postcss**](https://github.com/postcss/gulp-postcss) / [official site](http://postcss.org/)
* [**gulp-pug**](https://github.com/jamen/gulp-pug)
* [**gulp-pug-inheritance**](https://github.com/pure180/gulp-pug-inheritance)
* [**gulp-svg-sprite**](https://github.com/jkphl/gulp-svg-sprite)
* [**gulp-uglify**](https://github.com/terinjokes/gulp-uglify)
* [**gulp-util**](https://github.com/gulpjs/gulp-util)
* [**minimist**](https://github.com/substack/minimist)
* [**postcss-discard-empty**](https://github.com/ben-eb/postcss-discard-empty)
* [**postcss-easy-import**](https://github.com/TrySound/postcss-easy-import)
* [**postcss-functions**](https://github.com/andyjansson/postcss-functions)
* [**postcss-mixins**](https://github.com/postcss/postcss-mixins)
* [**postcss-nesting**](https://github.com/jonathantneal/postcss-nesting)
* [**postcss-simple-grid**](https://github.com/iamfrntdv/postcss-simple-grid)
* [**postcss-simple-vars**](https://github.com/postcss/postcss-simple-vars)
