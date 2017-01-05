#Partials

Pug partials serve as reusable blocks for your site. The content of a partial will never change. There are several starter partials to help jump start your pug development process:

* Address
* Main Nav
* Search
* Social Nav
* Table

In order to include a partial onto a page, you'll need to use pug's include functionality.

**Base Level**

```pug
include ../partials/nav-main.pug
```

In the case of adding a subfolder of pug pages, make sure to correct the path the include function looks for.

**Within 1 Subfolder**

```pug
include ../../partials/nav-main.pug
```

##Navigation Partials

Navigation in pug is automatically generated using manually entered data from configuration.json. When adding a new navigation partial, you'll also want to add a new representativ associative array in the links object of configuration.json:

```json
"links": {
  "mainNav": [],
  "newNav": [
    {
      "href": "https://github.com/mimoduo/Mimogear",
      "name": "View on Github"
    },
    {
      "href": "https://github.com/mimoduo/Mimogear/tree/master/docs",
      "name": "Documentation"
    }
  ]
}
```

Then you'll be able to use this new data in your newly created navigation partial using the `siteLinks` object:

```pug
ol
  each link in siteLinks.newNav
    li
      a(
        href=link.href
        itemprop="url"
      )= link.name
```

The following example shows the navigation partial being included on a page. A working example can be found within the header region under src/pug/regions/header.pug.

```pug
include ../partials/nav-main.pug
```
