#Quickstart Guide

_Mimogear was built to be simple_. Let's get you started into developing static sites with the quick start up guide below.

##Installation

Mimogear uses npm in order to download all of the necessary dependencies. If you haven't used the npm command before, head over to [node.js](https://nodejs.org/en/) to download the latest version of node. Let's cd into the project directory and then download our dependencies using the a terminal.

```sh
cd <folder-of-Mimogear>
npm install
```

##Updating Configuration

If you just want to dive in, move down to _Running Gulp_.

Now that you've downloaded all of the dependencies, let's take a moment to setup any variables that will help theme your site. Within the root of Mimogear, you'll find a list of variables within configuration.js. The main target of your configuration will be the font and heading style variables.

##Running Gulp

The meat of Mimogear is the `gulp` command. Within your terminal, type in `gulp` to help process a distribution /dist/ folder for your site.

```sh
gulp
```

This will automatically open your browser to your site and also watch for any file changes in the source /src/ folder.

##Beginning Development

All files that you'll be working with are in the /src/ folder.

* For CSS (using postcss) development: start in the [postcss documentation](https://github.com/mimoduo/Mimogear/tree/master/docs/postcss)
* For HTML (using pug) development, start in the [pug documentation](https://github.com/mimoduo/Mimogear/tree/master/docs/pug)
* For javascript development, start in the [javascript documentation](https://github.com/mimoduo/Mimogear/tree/master/docs/js)
