#Grids

The mimogear grid system is setup using the [Postcss-simple-grid](https://github.com/iamfrntdv/postcss-simple-grid) module. Let's setup a grid example for the gamagori breakpoint (1200px):

**Pug**

```pug
.grid
  .column.column-gamagori-4
    p Grid column content
  .column.column-gamagori-8
    p Grid column content
```

**Postcss**

```postcss
@mixin media $gamagori {

  .column-gamagori {
    create-grid: 12;
  }

}
```

By calling the create-grid property, postcss-simple-grid will then automatically compile the resulting css containing widths for 12 columns:

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
