#Mimogear

Mimogear is a complete starter kit for static sites. The main principle of Mimogear is to strike a balance between simplicity and features, to secure quality and consistency, to be as developer friendly as can be, and to be as project agnostic as possible.

##Tools Used in Mimogear

Under the hood, Mimogear uses [gulp](http://gulpjs.com/) as a task runner, [pug](https://pugjs.org/api/getting-started.html) as a HTML pre-processor, [postcss](http://postcss.org/) as a CSS post-processer, and standard javascript.

###[Gulp](http://gulpjs.com/) Features

* Pug compilation
* Postcss compilation with autoprefixing and minification
* JS concatenation and uglification
* Image optimization
* Inline SVG Sprite Creator
* Browsersync auto reloading

###JS Features

* [Slideshow/Sail module](http://codepen.io/mimoduo/pen/gabWmN)
* [Accordion/Harmonica module](http://codepen.io/mimoduo/pen/epZaMq)
* [Lightbox/Lantern](http://codepen.io/mimoduo/pen/EPerjv)

###[Postcss](http://postcss.org/) Features

* Idiomatic css formatting
* Common helper utilities
* Functions for calculating popular css units
* [Postcss-simple-grid](https://github.com/iamfrntdv/postcss-simple-grid) integration

###[Pug](https://pugjs.org/api/getting-started.html) Features

* Starter template
* Well structured head element setup
* Several frequently used starter partials
* Accessibility measures added into pug partials from: (https://github.com/nhall/Accessible-Components)
* SVG symbol mixin

##Installation

Mimogear aims to make development quick and efficient. To accomplish this, Mimogear has adopted the use of node package manager in order to download all the required dependencies. By downloading and installing [node.js](https://nodejs.org/en/) onto your machine, you'll be able to run a set of powerful commands we'll use to setup our starter kit environment. The next few steps should be entered within a terminal after node has completed its installation.

```sh
cd <folder-of-Mimogear>
npm install
gulp
```

##Optional Installation Steps

If you're comfortable with running an alpha version of gulp (and willing to dive into additional steps); there is an alpha gulpfile that mirrors the tasks of the stable gulpfile. By switching the alpha version of the gulpfile you should notice a significant improvement in performance from the use of parallel task processing. In order to use the new gulpfile, make sure to download the alpha version of gulp and the newly separated gulp-cli globally. Afterwards, rename the gulpfile-alpha.js and rename the original gulpfile to a name of your choice.

```sh
npm install gulpjs/gulp-cli -g
```

##Share Your Sites Using Mimogear

If you have used Mimogear and you'd love to share it here, feel free to create a pull request and add it to the list below.

* [mimoduo](http://mimoduo.github.io/)

##Thank You, Everyone!

I hope you enjoy developing with Mimogear as much as I have enjoyed building it! This starter kit wouldn't be possible without all the help of my friends. They've contributed to every single aspect of this without knowing it ^w^ Most notably [Nick Hall](https://github.com/nhall) for being the best mentor in the world!
