#Elements

Elements refer to standard html elements.

##Buttons

Buttons are styled all at once at first and then extended using simple class modifiers.

```css
.button-hollow {}
  
.button-condensed {}
```

##Forms

* form
* fieldset
* label
* input:
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

Within the media partials contains all the standard media elements listed below as well as a background covering element called a spotlight.

* images
* figures
* figcaption
* videos
* iframes
* canvas

If you wish to use the spotlight (also commonly referred to as the hero image), place the spotlight class and a background image onto the container of your choice. This class makes sure that the background image is centered and covers the full width and height of the container.

```pug
.spotlight(style="background-image: url('http://i.imgur.com/Gb3SqEL.jpg')")
  h1 Page Title
```

##Sprite

The sprite partial is used to add the width and height for each symbol that is included in the generated svg sprite. The example below styles a symbol called "mage" with the given width and height. This selector should be nested within the .symbol class that is currently present in the sprite partial. By doing so, the generated css selector will be .symbol-mage {}.

```css
&-mage {
  height: em(20);
  width: em(20);
}
```

##Type

The type partial contains all of your heading 1-6 styles. Each heading is styled using a respective mixin. By using a mixin, you are able to use these heading styles elsewhere in your project.

```css
cite {
  @mixin h6;
}
```
