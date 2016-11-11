#Quickstart

Mimogear was built to be simple. That said, this installation will be simple as well, not to mention quick.

##Installation

Mimogear uses npm in order to download all of the necessary dependencies. To get started, let's cd into the project directory and then download our dependencies using the a terminal.

```sh
cd <folder-of-Mimogear>
npm install
```

##Updating Configuration

If you just want to dive in, move down to _Running Gulp_.

Now that you've downloaded all of the dependencies, let's take a moment to setup any variables that will help theme your site. Within the root of Mimogear, you'll find a list of variables within configuration.js.

##Running Gulp

The meat of Mimogear is the "gulp" command. Within your terminal, type in _gulp_ to help process a distribution /dist/ folder for your site.

```sh
gulp
```

This will automatically open your browser to your site and also watch for any file changes in the source /src/ folder. The next section will discuss how to get started with your new development workflow.

##Development

All files that you'll be working with are in the /src/ folder.

* For postcss to css development, begin working in the /src/postcss/ folder
* For pug to html development, begin working in the /src/pug/ folder
* For javascript development, begin working in the src/js/site folder
