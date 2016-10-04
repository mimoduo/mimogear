#Mimogear

Mimogear is a complete starter kit for developers of any skill level to use as a simple start to any project. The main principle of Mimogear is to strike a balance between simplicity and features, to secure quality and consistency, to be as developer friendly as can be, and to be as project agnostic as possible.

##Features

**Gulp** as a task runner<br>
**Pug** as a HTML template engine<br>
**Postcss** as a post-processer<br>
**Vanilla JS** based Mimogear modules

###[Gulp](http://gulpjs.com/) Features

Gulp was chosen for its legibility, ease of customization, plugin environment, community support, and speed. For specific details on which modules are used within Mimogear, visit the [package.json file](https://github.com/mimoduo/Mimogear/blob/master/package.json) for a complete list of dependencies.

* Pug compilation
* Postcss compilation with autoprefixing and minification
* JS concatenation and uglification
* Image optimization
* Inline SVG Sprite Creator
* Browsersync auto reloading

###[Pug](https://pugjs.org/api/getting-started.html) Features

Pug was chosen for its extreme simplicity and robust inheritance structure.

* Starter template
* Well structured head element setup
* Several frequently used starter partials
* Accessibility measures added into pug partials from: (https://github.com/nhall/Accessible-Components)
* SVG symbol mixin

###[Postcss](http://postcss.org/) Features

Postcss was chosen for its natural closeness to css, flexibility, and plugin environment.

* Idiomatic css formatting
* Common helper utilities
* Functions for calculating popular css units
* [Postcss-simple-grid](https://github.com/iamfrntdv/postcss-simple-grid) integration

###JS Features

Standard JS was chosen for its community support and to reduce the number of dependencies required by Mimogear. Each module uses the module pattern as detailed by the [Oneone project](https://github.com/mimoduo/Oneone).

* [Slideshow/Sail module](http://codepen.io/mimoduo/pen/gabWmN)
* [Accordion/Harmonica module](http://codepen.io/mimoduo/pen/epZaMq)
* [Lightbox/Lantern](http://codepen.io/mimoduo/pen/EPerjv)

##Installation

Make sure you have [node.js](https://nodejs.org/en/) installed as we will need those in order to download all of our dependencies. Since we are going to run an alpha build of gulp, there is an extra step in downloading and installing the newly separated gulp cli.

```sh
cd <folder-of-Mimogear>
npm install
npm install gulpjs/gulp-cli -g
gulp
```

##And a Big Thank you!

This starter kit wouldn't be possible without all the help of my friends. They've contributed to every single aspect of this without knowing it ^w^ Most notably [Nick Hall](https://github.com/nhall): For being the best mentor in the world!
