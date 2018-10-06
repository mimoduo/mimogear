# Elements

Elements refer to standard html elements.

## Forms

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

## HTML

* anchors
* blockquotes
* cite
* lists
* paragraphs
* tables

## Media

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

## Sprite

The sprite partial is used to add a width and height for each icon that is included in the generated svg sprite. All image dimensions are entered in the default list within this partial. If you need to change the size, you can utilize the transform: scale(1); property. Just make sure to utilize the +icon() mixin in pug and transform the available span. If you need to add a new icon, just add one to the $icons list variable within this file:

**Sass**

```sass
/* (file-name, width, height) */
$icons: (
  (logo, 100, 150)
);
```

**CSS Output**

```css
.icon-logo {
  height: 100px;
  width: 150px;
}
```

## Type

The type partial contains styles for headings 1-6. Each heading is styled using a respective mixin. By using a mixin, you are able to use these heading styles on elements that aren't headers.