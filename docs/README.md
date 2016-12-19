#Quickstart Guide

_Mimogear was built to be simple_. And simple it'll be! Let's get you started into developing static sites with the quick start up guide below.

##Installation

Mimogear uses npm in order to download all of the necessary build dependencies. If you haven't downloaded node before, head over to [node.js](https://nodejs.org/en/) to download the latest version of node. Once you've installed node and have downloaded Mimogear, let's `cd` into the project directory and then download our dependencies using the a terminal:

```sh
cd <folder-of-Mimogear> (drag the folder into your terminal)
npm install
```

##Updating Configuration

If you just want to dive right into development, move down to _Running Gulp_.

Now that you've downloaded all of the dependencies, let's take a moment to setup any variables that will help theme your site. Within the root of Mimogear, you'll find a list of variables within configuration.js. The main target of your configuration will be the font and heading style variables.

##Running Gulp

The meat of Mimogear is the `gulp` command. Before we run gulp, bring up your terminal and make sure you have the gulp command line interface installed with `npm install gulp-cli -g`. Afterwards, type in `gulp` to help process a distribution /dist/ folder for your site.

```sh
npm install gulp-cli -g
gulp
```

**This will automatically open your browser to your site, compile all of your development assets within /src/, and watch for any file changes in the source /src/ folder.**

##Advanced Gulp

There's an advanced gulp task that will minify assets to ready them for production. Simply pass in the `--production` flag to set an environment variable for gulp to use:

```sh
gulp --production
```

##Beginning Development

Once you're all set with getting `gulp` to make its first big _gulp_. Either head over to the /src/ folder if you're getting jittery reading all this and start cracking away at development, or check out Mimogear's /src/ documentation using the list below:

* For CSS (using postcss) development, start in the [postcss documentation](https://github.com/mimoduo/Mimogear/tree/master/docs/postcss)
* For HTML (using pug) development, start in the [pug documentation](https://github.com/mimoduo/Mimogear/tree/master/docs/pug)
* For javascript development, start in the [javascript documentation](https://github.com/mimoduo/Mimogear/tree/master/docs/javascript)
