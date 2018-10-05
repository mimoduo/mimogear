# Mixins

Mixins are a great way to take shortcuts with pug. The available Mimogear mixins are already included into the main template file.

**Available Mixins**

* `+gallery`: generates a list of images based on a given directory inside /images/
* `+image`: generates an image given a class name, file name, and alt label
* `+section`: generates a section container given an optional class name
* `+icon`: generates an svg related to an svg in the site sprite

## Adding a New Mixin

To add a new mixin, first create a pug file within /src/pug/mixins/. The pug.js site contains some awesome documentation on [how to create and use a mixin](https://pugjs.org/language/mixins.html). After you've successfully created your mixin, make sure to add it to your desired template near the very top of the file:

```pug
include mixins/icon.pug
include mixins/section.pug
include mixins/new-mixin.pug
```

## +gallery

The gallery mixin generates a list of images given a particular directory within the /images folder. This mixin uses the gallery object that is passed in from the gulpfile. The root level can be called with `gallery.root`.

**Pug**

```pug
+gallery(gallery.root);
```

If you have a folder within the src/images/ folder, you'll be able to call it using that particular folder name.

**Pug**

```pug
+gallery(gallery.myFolder)
```

## +image

The image mixin generates an image element given a file name, alt label, and an optional class name. The image path changes based on whether or not the files are being used in regular production or being deployed to gh-pages.

**Pug**

```pug
+image("class-name", "image.jpg", "A descriptive alt label")
```

**HTML Output**

```html
<img class="class-name" src="./dist/images/image.jpg" alt="A descriptive alt label"/>
```

## +section

The section mixin generates markup for a generic container given an optional class name parameter. By default it's a container element with a nested compartment that keeps content within a predefined boundary.

**Pug**

```pug
+section
  p Any pug code can be nested here
```

**HTML Output**

```html
<div class="section">
  <div class="compartment">
    <p>Any pug code can be nested here</p>
  </div>
</div>
```

Sometimes you may need to modify a section beyond its default styling. By passing in a string, the section mixin will generate an alternate class.

**Pug**

```pug
+section("condensed")
  p Any pug code can be nested here
```

**HTML Output**

```html
<div class="section section-condensed">
  <div class="compartment">
    <p>Any pug code can be nested here</p>
  </div>
</div>
```

## +icon

The icon mixin generates an svg icon given the name of an imported svg. The result links with the automatically generated sprite. Note: it's better practice to style the span surrounding an svg than the svg itself.

**Pug**

```pug
+icon("link-icon", "arrow-forward")
```

**HTML Output**

```html
<span class="link-icon">
  <svg class="icon icon-arrow-forward">
    <use xlink:href="#arrow-forward"></use>
  </svg>
</span>
```