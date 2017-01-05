#Mixins

Mixins are a great way to take shortcuts with pug. The available Mimogear mixins are already included into the main template file.

**Available Mixins**

* `+image`: generates an image given a file name, alt label, and optional class name
* `+section`: generates a section container given an optional class name
* `+symbol`: generates an svg related to an svg in the site sprite

##Adding a New Mixin

To add a new mixin, first create a pug file within /src/pug/mixins/. The pug.js site contains some awesome documentation on [how to create and use a mixin](https://pugjs.org/language/mixins.html). After you've successfully created your mixin, make sure to add it to your desired template near the very top of the file:

```pug
include mixins/symbol.pug
include mixins/section.pug
include mixins/new-mixin.pug
```

##+image

The image mixin generates an image element given a file name, alt label, and an optional class name. The image path changes based on whether or not the files are being used in regular production or being deployed to gh-pages.

**Pug**

```pug
+image("image.jpg", "A descriptive alt label", ".class-name")
```

**HTML Output**

```html
<img src="./dist/images/image.jpg" alt="A descriptive alt label" class="class-name" />
```

##+section

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

##+symbol

The symbol mixin generates an svg symbol given the name of an imported svg. The result links with the automatically generated sprite.

**Pug**

```pug
+symbol("arrow-forward")
```

**HTML Output**

```html
<svg class="symbol symbol-arrow-forward">
  <use xlink:href="#arrow-forward"></use>
</svg>
```

The symbol mixin can also be nested within other elements.

**Pug**

```pug
.reason
  +symbol("arrow-forward")
  span.reason-label Awesome
```

**HTML Output**

```html
<div class="reason">
  <svg class="symbol symbol-arrow-forward">
    <use xlink:href="#arrow-forward"></use>
  </svg>
  <span class="reason-label">Awesome</span>
</div>
```

Sometimes you may need to modify a symbol beyond its default styling. By passing in an extra string parameter, separated by a comma, the symbol mixin will generate an alternate class.

**Pug**

```pug
+symbol(
  "arrow-forward",
  "larger"
)
```

**HTML Output**

```html
<svg class="symbol symbol-arrow-forward symbol-arrow-forward-larger">
  <use xlink:href="#arrow-forward"></use>
</svg>
```
