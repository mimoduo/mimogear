#Partials

Partials serve as reusable blocks. The content of a partial will never change. There are several starter partials to help jump start your pug development process:

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

Sometimes you'll need to add a unique class to navigation. Mimogear removes the nav class declaration from the navigation partial in order to allow for this type of flexibility. The following example shows the navigation partial being included on a page. A working example can be found within the header region under src/pug/regions/header.pug.

```pug
nav.nav-main.nav-main-condensed
  include ../partials/nav-main.pug
```
