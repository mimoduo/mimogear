#Using Postcss in Mimogear

Mimogear uses an extended CSS language called postcss. This means you'll be writing much of the same CSS as before but with some advanced features like variables and nesting found in popular pre-processor frameworks like SASS. Most of the skeleton work revolved around scaffolding a css project has already been setup for you.

##Setting Up Variables

All the postcss variables used in Mimogear are found within configuration.js. Most of the variables in configuration.js are based on font styles but there is a set for breakpoints as well. Make sure to restart the gulp task every time you make a change here as the variables won't take effect until you do so.

##Styling Your Site

Getting started with styles is fairly simple! All the base styles are found in /src/postcss/. If you'd like to use Mimogear's mixins, be sure to check out the /src/postcss/utilities/ folder.

_If you have a question about what something is, there is a detailed set of docs found in /docs/postcss/._
