#Mimo

The mimo partials refer to the slideshow and lightbox available within Mimogear.

##Grid

The Mimogear grid system is setup using the [Postcss-simple-grid](https://github.com/iamfrntdv/postcss-simple-grid) module. Let's setup a grid example for the gamagori breakpoint (1200px):

**Postcss**

```postcss
@mixin media $gamagori {

  .column-gamagori {
    create-grid: 12;
  }

}
```

**CSS Output**

```css
@media screen and (min-width: 1200px) {

  .column-gamagori-1 {
    width: 8.33333%;
  }

  /* ...generated rules for columns 2-11... */

  .column-gamagori-12 {
    width: 100%;
  }

}
```

To use these newly generated columns in your template, add a default column class to your container and then the unique column class you wish to use:

**Pug**

```pug
.grid
  .column.column-gamagori-4
    p Grid column content
  .column.column-gamagori-8
    p Grid column content
```

##Sail

The sail partial contains styles that animate slides and help dictate mouse interaction. Make sure to style the previous control, next control, and pagination if they are in use.

##Drawer

There are three mixins available within the drawer partial as well as default styles for the drawer and respective drawer trigger. By default the drawer will be translated 20% of itself to the left. The following example will demonstrate the use of the reset drawer mixins in order to display drawer content on larger screens in its original stacking order.

**Postcss**

```postcss
.drawer {
  /* styles */

  @media $aldnoah {
    @mixin reset-drawer;
  }

}
```

##Lantern

The lantern partial styles the lightbox, dictates recommended controller positions, and makes sure that images will fit properly within the viewport. It's possible to show the caption of an image by accessing the title attribute of the lantern-content:

```postcss
.lantern-content {
  /* styles */

  &:after {
    content: attr(title);
  }

}
```

##Mimo Theme

The mimo-theme styles the main index page that is shown by default. _This theme is safe to delete_ during production.
