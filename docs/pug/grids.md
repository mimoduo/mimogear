# Grids

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
