#Formatting

Mimogear enforces a strict postcss formatting standard. The following example demonstrates [idiomatic css](https://github.com/necolas/idiomatic-css) with some modifications and additional practices.

**Notes**

* Multi value rules (gradients, transforms, transitions) are separated on new lines and indented when appropriate
* Nested elements are indented to mimic their respective markup

```postcss
  .module {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: em(20);
    line-height: nu(28, 20);
    cursor: pointer;
    background:
      linear-gradient(
        to bottom,
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, .25) 100%
      );
    box-shadow:
      0 0 0 em(20) #000,
      0 0 0 em(40) #ffa;
    transform:
      translate(-50%, -50%)
      scale(1.25);
    transition:
      color .25s,
      transform .25s;

    @media print {}

    @mixin media $yatterman {}

    &:before {}

    &:focus,
    &:hover {

      @mixin media $yatterman {}

    }

    &-state {

      @mixin media $yatterman {}

    }

  }

    .module-subcomponent {
      /* styles */
    }
```
