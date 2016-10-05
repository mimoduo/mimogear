#Mimogear

Mimogear is a complete starter kit for developers of any skill level to use as a simple start to any project. The main principle of Mimogear is to strike a balance between simplicity and features, to secure quality and consistency, to be as developer friendly as can be, and to be as project agnostic as possible.

##Tools Used in Mimogear

Under the hood, Mimogear uses gulp as a task runner, pug as a HTML pre-processor, postcss as a CSS post-processer, and standard javascript.

###[Gulp](http://gulpjs.com/) Features

* Pug compilation
* Postcss compilation with autoprefixing and minification
* JS concatenation and uglification
* Image optimization
* Inline SVG Sprite Creator
* Browsersync auto reloading

###[Pug](https://pugjs.org/api/getting-started.html) Features

* Starter template
* Well structured head element setup
* Several frequently used starter partials
* Accessibility measures added into pug partials from: (https://github.com/nhall/Accessible-Components)
* SVG symbol mixin

###[Postcss](http://postcss.org/) Features

* Idiomatic css formatting
* Common helper utilities
* Functions for calculating popular css units
* [Postcss-simple-grid](https://github.com/iamfrntdv/postcss-simple-grid) integration

###JS Features

* [Slideshow/Sail module](http://codepen.io/mimoduo/pen/gabWmN)
* [Accordion/Harmonica module](http://codepen.io/mimoduo/pen/epZaMq)
* [Lightbox/Lantern](http://codepen.io/mimoduo/pen/EPerjv)

##Installation

Make sure you have [node.js](https://nodejs.org/en/) installed as we will need those in order to download all of our dependencies. Additionally, in order to run the alpha build of gulp, there is an extra step in downloading and installing the newly separated gulp cli. However, if you run into any issues related to running the alpha build of gulp, there is a legacy gulpfile that is compatible with the stable version of gulp.

```sh
cd <folder-of-Mimogear>
npm install
npm install gulpjs/gulp-cli -g
gulp
```

##And a Big Thank You!

This starter kit wouldn't be possible without all the help of my friends. They've contributed to every single aspect of this without knowing it ^w^ Most notably [Nick Hall](https://github.com/nhall): For being the best mentor in the world!
