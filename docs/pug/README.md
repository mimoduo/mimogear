#Using Pug in Mimogear

Mimogear uses pug in order to create static pages and get the markup work done. Pug is a stripped down markup language, with powerful template capabilities, that compiles into HTML. Luckily for us that means we'll be focusing more on writing unique markup rather than repeating ourselves to recreate templates. All of the scaffolding revolved around distributing pages has already been taken care of for you.

##Recommended Workflow

The foundation for pug is already laid out for you in the shape of templates, regions, and pages. To get started, take a look at /src/pug/templates/site.pug to found the skeleton of your site. Make the necessary changes if necessary then move over to /pug/regions/ to start working on your head, header, and footer. Once you're ready to start working with components and pages, begin creating pages in /src/pug/pages/ that extend the site.pug template. There's already a blank starter.pug to quickstart your markup development. Good places to start in:

1. _/src/pug/templates/site.pug_ - to modify the base template
2. _/src/pug/regions/_ - to modify the repeated regions
3. _/src/pug/pages/_ - to add in new pages to your site
