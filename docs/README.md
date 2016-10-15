#Mimogear Documentation

##[Gulp](http://gulpjs.com/)

Gulp, a task runner, was chosen for its legibility, ease of customization, plugin environment, community support, and speed. For specific details on which modules are used within Mimogear, visit the [package.json file](https://github.com/mimoduo/Mimogear/blob/master/package.json) for a complete list of dependencies.

##JS

Standard JS was chosen, rather than a JS based framework like jquery, for its community support and to reduce the number of dependencies required by Mimogear. Each module uses the module pattern as detailed by the [Oneone project](https://github.com/mimoduo/Oneone) and written about on [css-tricks](https://css-tricks.com/how-do-you-structure-javascript-the-module-pattern-edition/).

##[Postcss](http://postcss.org/)

Postcss, a css post processor, was chosen for its natural closeness to css, flexibility, and plugin environment. If you wish to add additional functionality to Mimogear's postcss process, [postcss.parts](http://postcss.parts/) has a community driven set of modules available for production.

##[Pug](https://pugjs.org/api/getting-started.html)

Pug, a html template language, was chosen for its extreme simplicity and robust inheritance structure.
