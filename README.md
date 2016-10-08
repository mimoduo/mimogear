#Mimogear

Mimogear is a complete starter kit for developers of any skill level to use as a simple start to any project. The main principle of Mimogear is to strike a balance between simplicity and features, to secure quality and consistency, to be as developer friendly as can be, and to be as project agnostic as possible.

##Tools Used in Mimogear

Under the hood, Mimogear uses [gulp](http://gulpjs.com/) as a task runner, [pug](https://pugjs.org/api/getting-started.html) as a HTML pre-processor, [postcss](http://postcss.org/) as a CSS post-processer, and standard javascript.

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

Make sure you have [node.js](https://nodejs.org/en/) installed as we will need those in order to download all of our dependencies. The next few steps should be entered within a terminal after node has completed its installation.

```sh
cd <folder-of-Mimogear>
npm install
gulp
```

##Optional Installation Steps

If you're comfortable with running an alpha version of gulp (and willing to dive into additional steps); there is an alpha gulpfile that mimics the tasks of the stable gulpfile. By switching the alpha version of the gulpfile you should notice a significant improvement in performance. In order to use the new gulpfile, make sure to download the alpha version of gulp and the newly separated gulp-cli globally.

```sh
npm install gulpjs/gulp-cli -g
```

##And a Big Thank You!

This starter kit wouldn't be possible without all the help of my friends. They've contributed to every single aspect of this without knowing it ^w^ Most notably [Nick Hall](https://github.com/nhall): For being the best mentor in the world!
