# Mimo

The mimo partials refer to the grid, slideshow, lightbox, and theme available within Mimogear.

**Wondering where all those styles came from? You might want to delete the theme found in /src/sass/mimo/theme or set $keepMimoTheme to false in /src/sass/configuration.

## Sail

The sail partial contains styles that animate slides and help dictate mouse interaction. Make sure to style the previous control, next control, and pagination if they are in use.

## Menu

By default the menu will be translated 20% of itself to the left. The following example will demonstrate the use of the reset menu mixins in order to display menu content on larger screens in its original stacking order.

**Sass**

```sass
.menu {
  /* styles */

  @media #{$xl} {
    @include reset-menu;
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

The theme styles the main index page that is shown by default. _This theme is safe to delete_ during production and can be disabled by setting $keepMimoTheme to false in /src/sass/configuration.
