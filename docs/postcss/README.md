#Using Postcss in Mimogear

Using Postcss means you'll be writing much of the same CSS as before but with some advanced features like variables and nesting found in popular pre-processor frameworks like SASS. Most of the skeleton work revolved around scaffolding a css project has already been setup for you. _Make sure to delete the mimo-theme partial found in /src/postcss/mimo/ for a fresh start!_

##Setting Up Variables

All the postcss variables used in Mimogear are found within configuration.js. Make sure to restart the gulp task every time you make a change here as the variables won't take effect until you do so.

##Styling Your Site

Getting started with styles is pretty simple! All the base styles are found in /src/postcss/ and documented in /docs/postcss/. If you'd like to use Mimogear's mixins, check out the /src/postcss/utilities/ folder.

**Don't forget to delete the mimo-theme found in /src/postcss/mimo/ (unless you'd like to keep it)**

**If you have a question about what something is, there is a detailed set of docs found in /docs/postcss/.**
