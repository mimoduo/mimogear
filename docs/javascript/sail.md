# Sail

A sail is a slideshow of elements that allows the user to cycle through sets of content.

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

The following example shows a complete set of options within Sail:

**Javascript**

```js
Sail.init({
  slides: '.sail-slides', // selector of the sail slideshow
  slide: 'li', // selector for each sail slide
  previous: '#arrow-back', // svg symbol for the previous control
  next: '#arrow-forward' // svg symbol for the next control
});
```
