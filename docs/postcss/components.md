#Components

Components refer to custom modules that are developed during production.

##Buttons

Buttons are styled all at once at first and then extended using simple class modifiers. Focus and hover states are also combined to ensure proper keyboard and mouse focus. Disabled styles are also provided to prevent any sort of confusion while interacting with a disabled button.

```postcss
.button-hollow {}

.button-condensed {}
```

##Logo

The logo component is an anchor used to house your site's logo. The default setup includes the logo as an svg symbol. However, it can also be used in conjunction with an img element or a background image. The site logo label indicating the name of the site is visually hidden but visible to screen readers. This prevents the text from getting in the way of the logo's dimensions. The following example creates a flexible background based logo given a max-width and height.

**Background Based Logo**

```postcss
.site-logo {
  height: em(80);
  max-width: em(380);
  width: 100%;
  background: url("../images/logo.svg") no-repeat 0 50%;
  background-size: contain;
}
```

##Search

The search component contains selectors for the default pug search partial that isn't integrated into any particular search platform. The search label is visually hidden but visible to screen readers.
