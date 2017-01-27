# Partials

Pug partials serve as reusable blocks for your site. The content of a partial will never change. There are several starter partials to help jump start your pug development process:

* Address
* Main Nav: uses `"mainNav"` data from configuration.json
* Social Nav: uses `"socialNav"` data from configuration.json
* Table

To add a partial onto a page, use pug's `include` function:

**Base Level**

```pug
include ../partials/nav-main.pug
```

## Navigation Partials

Navigation in pug is generated using manually entered data from configuration.json. Whenever you make a new navigation array, make sure it follows the same associative array pattern as the others:

```json
"links": {
  "mainNav": [],
  "newNav": [
    {
      "href": "https://github.com/mimoduo/mimogear",
      "name": "View on Github"
    },
    {
      "href": "https://github.com/mimoduo/mimogear/tree/master/docs",
      "name": "Documentation"
    }
  ]
}
```

After adding in a new associative array, you'll be able to use this new data in your newly created navigation partial using the `siteLinks` object:

```pug
ol
  each link in siteLinks.newNav
    li
      a(
        href=link.href
        itemprop="url"
      )= link.name
```
