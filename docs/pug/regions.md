#Regions

Regions are common structural elements that are included on every page by default. Certain regions also contain several helpful blocks the can be used on a page by page basis. Information on passing in content to the available region blocks can be found within the [pug/pages](https://github.com/mimoduo/Mimogear/blob/master/docs/pug/pages.md) documentation.

##Head

**Elements**

* standard meta elements
* favicon starter
* main stylesheet

**Blocks**

* `block title`
* `block description`
* `block additional-stylesheets`

###Referencing Favicons

There aren't any favicon references added by default, but there is a favicon mixin available to do so. To generate a favicon image reference, pass in a size to the favicon mixin:

```pug
+favicon(48);
+favicon(64);
```

##Header

While there are no blocks present within the head region, there may be cases where using a block in your project may be useful. Maybe certain pages will need to have different types of navigation or different spotlight images. Keep this in mind while developing your site!

* site logo
* drawer

##Footer

**Elements**

* address partial
* main javascript file

**Blocks**

* `block additional-scripts`
