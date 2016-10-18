#Harmonica

A harmonica provides a way to have accordions on smaller screens and eventually harmonicas (tabs) on a larger screen.

##Usage With All Default Options Shown

```pug
.harmonica
  button.harmonica-header(role="tab")
    h4 Harmonica One
  article.harmonica-content(role="tabpanel") Lorem ipsum dolor.
  button.harmonica-header(role="tab")
    h4 Harmonica Two
  article.harmonica-content(role="tabpanel") Donec quam felis.
```

```js
Harmonica.init({
  headings: '.harmonica-header',
  articles: '.harmonica-content',
  activeClass: 'harmonica-header-active'
});
```
