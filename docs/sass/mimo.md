# Mimo

The mimo partials refer to the grid, slideshow, lightbox, and mimo-theme available within Mimogear.

**Wondering where all those styles came from? You might want to delete the mimo-theme found in /src/sass/mimo/**

## Sail

The sail partial contains styles that animate slides and help dictate mouse interaction. Make sure to style the previous control, next control, and pagination if they are in use.

## Drawer

There are three mixins available within the drawer partial as well as default styles for the drawer and respective drawer trigger. By default the drawer will be translated 20% of itself to the left. The following example will demonstrate the use of the reset drawer mixins in order to display drawer content on larger screens in its original stacking order.

**Sass**

```sass
.drawer {
  /* styles */

  @media $aldnoah {
    @include reset-drawer;
  }

}
```

## Lantern

The lantern partial styles the lightbox, dictates recommended controller positions, and makes sure that images will fit properly within the viewport. It's possible to show the caption of an image by accessing the title attribute of the lantern-content:

```sass
.lantern-content {
  /* styles */

  &:after {
    content: attr(title);
  }

}
```

## Mimo Theme

The mimo-theme styles the main index page that is shown by default. _This theme is safe to delete_ during production.
