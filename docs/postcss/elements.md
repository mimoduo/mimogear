#Elements

Elements refer to standard html elements.

##Buttons

Buttons are styled all at once at first and then extended using simple class modifiers. Focus and hover states are also combined to ensure proper keyboard and mouse focus. Disabled styles are also provided to prevent any sort of confusion while interacting with a disabled button.

```postcss
.button-hollow {}

.button-condensed {}
```

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

* anchors: focus, hover and visited styles
* blockquotes: includes unicode quotes within the before and after psuedo selectors
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

If you wish to use the spotlight (also commonly referred to as the hero image), place the spotlight class and a background image onto the container of your choice. This class makes sure that the background image is centered and covers the full width and height of the container.

```pug
.spotlight(style="background-image: url('http://i.imgur.com/Gb3SqEL.jpg')")
  h1 Page Title
```

##Sprite

The sprite partial is used to add the width and height for each symbol that is included in the generated svg sprite. The example below styles a symbol called "mage" with a given width and height. This selector should be nested within the .symbol class that is currently present in the sprite partial.

**Postcss**

```postcss
&-mage {
  height: em(20);
  width: em(20);
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

The type partial contains all of your heading 1-6 styles. Each heading is styled using a respective mixin. By using a mixin, you are able to use these heading styles elsewhere in your project. This use is reserved for selectors that aren't headers but have been styled as such in the design.

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
