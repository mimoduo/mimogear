# Quickstart Guide

**Mimogear** _was built to be simple_. And simple it'll be! Let's get you started into developing static sites with the quick start up guide below.

## Installation

Before we start setting up Mimogear, make sure you've cloned Mimogear from github:

* [download mimogear.zip](https://github.com/mimoduo/mimogear/archive/master.zip)
* use https://github.com/mimoduo/mimogear.git to clone with a git program
* type `git clone https://github.com/mimoduo/mimogear.git` in your terminal

After successfully cloning Mimogear, we'll need to download _node.js_ from [node's website](https://nodejs.org/en/) to help with managing Mimogear's dependencies.

Now that we have all the goodies ready for us, open up your terminal and enter in the following:

```sh
cd <folder-of-Mimogear> (drag the folder into your terminal)
npm install
```

## Updating Configuration

Now that you've downloaded all of the dependencies, let's take a moment to setup configuration.json. Here you'll find a complete list of variables used in Mimogear.

**The "links": {} object passes data to pug to help generate your site's navigation markup**

## Running Gulp

The meat of Mimogear is the `gulp` command. Before we run gulp, bring up your terminal and make sure you have the gulp command line interface installed with `npm install gulp-cli -g`. Afterwards, type in `gulp` to help process a distribution /dist/ folder for your site.

```sh
npm install gulp-cli -g
gulp
```

**Gulp will automatically open your browser to your site, compile all of your development assets within /src/, and watch for any file changes in the source /src/ folder.**

## Beginning Development

Once you're all set with getting `gulp` to make its first big _gulp_. Either head over to the /src/ folder if you're getting jittery reading all this and start cracking away at development, or check out Mimogear's documentation using the list below:

* [CSS:Postcss documentation](https://github.com/mimoduo/mimogear/tree/master/docs/postcss)
* [HTML:Pug documentation](https://github.com/mimoduo/mimogear/tree/master/docs/pug)
* [Javascript documentation](https://github.com/mimoduo/mimogear/tree/master/docs/javascript)

**Wondering where all those styles came from? You might want to delete the mimo-theme found in /src/postcss/mimo/**
