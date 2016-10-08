#Partials

Partials are meant to serve as reusable blocks that are frequent throughout the design. Mimogear comes with the following partials which should serve as a formidable start to the beginning of your development.

* Address
* Article
* Nav Main
* Nav Social
* Search
* Table

In order to include a partial onto a page, you'll need to use pug's include functionality. Make sure that your paths are correct when creating pages within a subfolder of the original pages folder.

```pug
include ../partials/nav-main.pug
```
