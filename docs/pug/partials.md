#Partials

Partials are meant to serve as reusable blocks that are frequent throughout the design. The content of a partial will never change. Mimogear comes with the following partials which should serve as a formidable start to the beginning of your development.

* Address
* Article
* Nav Main
* Nav Social
* Search
* Table

In order to include a partial onto a page, you'll need to use pug's include functionality. In the case of adding a subfolder of pug pages, make sure to correct the path the include function looks for.

**Base Level**

```pug
include ../partials/nav-main.pug
```

**Within 1 Subfolder**

```pug
include ../../partials/nav-main.pug
```
