# Sail

A sail is a slideshow of elements that allows the user to cycle through sets of content. It works based on a series of controllable active classes.

## Quick Use

To get started with Sail, add in the following line inside the anonymous function found in /src/site/main.js:

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

## Module Defaults

The following example shows the defaults for each of the available settings:

**Javascript**

```js
Sail.init({
  slides: '.sail-slides', // selector of the sail slideshow
  slide: '.sail-slides li', // selector for each sail slide
  symbols: { // svg symbols to append to slideshow controls
    previous: '#arrow-back',
    next: '#arrow-forward'
  },
  activeSlideClass: 'sail-slide-active',
  activePageClass: 'sail-page-active'
});
```
