#Using Pug in Mimogear

Mimogear uses pug in order to create static HTML pages based on a base template. Pug let's us write a simpler form of HTML while also giving us the ability to use template inheritance, variables, and mixins. All of the scaffolding revolved around distributing pages has already been setup for you.

##Modifying the Base Template

The base template is what is used as the foundation for each page. This template can be found in /src/pug/templates/site.pug. Take note that any changes you make to this file will also be applied to every page that uses this template!

##Adjusting the Head, Header, and Footer

Every site has a head section. Most sites have a header and footer. To adjust these files, which are included on every page by default, head over to /src/pug/regions/.

##Creating a Page

Once you've adjusted the base template file and the region files to your liking, head over to /src/pug/pages/. Any pug file you create here will be compiled to its respective path in the root of Mimogear. This will also be the place to add in all your components. There's a starter.pug file to serve as the simplest form of a pug page available.

_If you have a question about what something is, there is a detailed set of docs found in /docs/pug/._
