#Pages

Pug pages are ultimately compiled into html files. Each page extends the main pug template and contains several optionally blocks.

##Changing the Theme

In some cases there are special treatments that are particular only to a certain page. Usually this is the case when modifying common structural elements such as making the header overlay a featured image. The theme variable will allow you to change a theme specific class on the html element.

```pug
block theme
  - pageTheme = "homepage"
```

##Injecting Content

In order to add content to your page, there is a content block that is setup by default on each of the two included pages within Mimogear. This content will be nested directly into the main element of your site.

```pug
block content
  p Any pug code can be nested here
```

##Changing the Page's Title and Description

Much like changing the theme per page, there are two variables that also control what the page title and page description are. Changing these values will override the default title and description managed through the package.json.

```pug
block title
  - var title = "A different title"

block description
  - var description = "A different description"
```

##Adding Additional Stylesheets

In the case you would like to add additional stylesheets on a page per page bases, there is an optional block labeled additional-stylesheets at the end of the head region.

```pug
block additional-stylesheets
  link(
    rel="stylesheet"
    href="/dist/css/additional-stylesheet.css"
  )
```

##Adding Additional Scripts

In the case you would like to add additional scripts on a page per page bases, there is an optional block labeled block additional-scripts at the end of the footer region.

```pug
block additional-scripts
  script(src="/dist/js/site.js")
```
