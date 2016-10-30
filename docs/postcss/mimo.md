#Mimo

The mimo partials refer to all the specialized mimo modules available within Mimogear.

##Drawer

There are three mixins available within the drawer partial as well as default styles for the drawer and respective drawer trigger. By default the drawer will be shifted 20% of itself to the left. The following example will demonstrate the use of the active and reset drawer mixins in order to display drawer content on larger screens in its original stacking order.

```postcss
.drawer {
  // styles

  @media $aldnoah {
    @mixin active-drawer;
    @mixin reset-drawer;
  }

}
```

##Grid

The grid partial contains styles relative to the postcss-simple-grid system. THe following example will create widths for 12 columns within the gamagori breakpoint.

**Postcss**

```postcss
@media (min-width: $gamagori) {

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

  /* ...columns 2-11... */

  .column-gamagori-12 {
    width: 100%;
  }

}
```

##Harmonica

The harmonica partial styles the ordering of active content. The $accordion-to-harmonica variable dictates when the accordion on smaller screens becomes a harmonica on larger screens.

##Lantern

The lantern partial styles the lantern holder, dictates recommended controller positions, and makes sure that images will fit properly within the viewport.

##Mimo Theme

The mimo-theme styles the main index page that is shown by default. This theme is safe to delete during production.

##Sail

The sail partial contains styles that animate slides and help dictate user interaction with controls. Make sure to style the previous, next, and pagination controls if they are in use.
