#Sail

A sail is a slideshow of elements that allows the user to cycle through sets of content. It works based on a series of controllable active classes.

##Quick Use

To get started with sails, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
Sail.init();
```

Then you'll want to add in some sail markup into your pug page. This example uses the markup that is required by default:

**Pug**

```pug
ol.sail-slides
  li One
  li Two
  li Three
  li Four
```

##Module Defaults

The following example shows the defaults for each of the available settings:

**Javascript**

```js
Sail.init({
  slides: '.sail-slides', // Class String: The container for all slides
  slide: '.sail-slides li', // Class String: The selector of each slide
  symbols: {
    previous: '#arrow-back', // Link String: The previous control svg
    next: '#arrow-forward' // Link String: The next control svg
  },
  activeSlideClass: 'sail-slide-active', // String: The class applied to an active slide
  activePageClass: 'sail-page-active' // String: The class applied to an active page
})
```
