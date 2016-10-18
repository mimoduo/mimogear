#Sail

A sail (slideshow) is a carousel of elements that works based on a series of controllable active classes.

##Usage With All Default Options Shown

```pug
ol.sail-slides
  li
  li
  li
```

```js
Sail.init({
  slides: '.sail-slides',
  slide: '.sail-slides li',
  currentSlide: 0,
  symbols: {
    prev: '#arrow-back',
    next: '#arrow-forward'
  },
  activeSlideClass: 'sail-active',
  activePageClass: 'sail-page-active'
})
```
