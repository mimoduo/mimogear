#Pages

Pug pages are ultimately compiled into html files. Each page extends the main pug template.

In some cases there are special treatments that are particular only to a certain page. Usually this is the case when modifying common structural elements such as making the header overlay a featured image. The theme block will allow you to change a theme specific class on the html element.

```pug
block theme
  - pageTheme = "homepage"
```

In order to add content to your page, there is a content block that is setup by default on each of the two included pages within Mimogear. This content will be nested directly into the main element of your site.

```pug
block content
  p Any pug code can be nested here
```

##Index

The index.pug page represents your homepage.

##Style Guide

The style-guide.pug page represents a reference for the most common html elements.
