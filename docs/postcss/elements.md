#Elements

Elements refer to standard html elements.

##Forms

* form
* fieldset
* label
* input
  * text
  * radio
  * checkbox
  * submit
* select
* textarea

##HTML

* anchors
* blockquotes
* cite
* lists
* paragraphs
* tables

##Media

* images
* figures
* figcaption
* videos
* iframes
* canvas
* spotlight

**Spotlights**

The spotlight (also commonly referred to as the hero image) can be using by placing the spotlight class and a background image onto the container of your choice. This class makes sure that the background image is centered and covers the full width and height of the container.

```pug
.spotlight(style="background-image: url('./dist/images/super-couple.jpg')")
  h1 Page Title
```

##Sprite

The sprite partial is used to add the width and height for each symbol that is included in the generated svg sprite. The example below styles a symbol called "mage" with a given width and height. This selector should be nested within `.symbol {}` inside the sprite partial.

**Postcss**

```postcss
.symbol {
  /* styles */

  &-mage {
    height: em(20);
    width: em(20);
  }

}
```

**CSS Output**

```css
.symbol-mage {
  height: 1.25em;
  width: 1.25em;
}
```

##Type

The type partial contains styles for headings 1-6. Each heading is styled using a respective mixin. By using a mixin, you are able to use these heading styles on elements that aren't headers.

**Postcss**

```postcss
cite {
  @mixin h6;
}
```

**CSS Output**

```css
cite {
  margin: 1.25rem 0;
  font-size: 1rem;
  line-height: 1.375;
}
```
