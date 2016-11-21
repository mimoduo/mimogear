#Using Pug in Mimogear

Mimogear uses pug in order to create static pages and get the markup work done. Pug is a stripped down markup language, with powerful template capabilities, that compiles into HTML. Luckily for us that means we'll be focusing more on writing unique markup rather than repeating ourselves to recreate templates.

##Recommended Workflow

The foundation for pug is already laid out for you in the shape of templates, regions, and pages. To get started, take a look at /pug/templates/site.pug to found the skeleton of your site. Make the necessary changes if necessary then move over to /pug/regions/ to start working on your head, header, and footer. Once you're ready to start working with components and pages, begin creating pages in /pug/pages/ that extend the site.pug template. There's already a blank starter.pug to quickstart your markup development.
