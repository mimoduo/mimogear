#Harmonica

A harmonica provides a way to have accordions on smaller screens and eventually harmonicas (tabs) on a larger screen.

##Notes

* Any sort of markup can be used within the harmonica-header
* Role attributes are added by default via javascript
* The usage of a button as the header is required for keyboard entry and focus

##Usage With All Default Options Shown

**Pug**

```pug
.harmonica
  button.harmonica-header
    h4 Harmonica One
  article.harmonica-content Lorem ipsum dolor.
  button.harmonica-header
    h4 Harmonica Two
  article.harmonica-content Donec quam felis.
```

**Javascript**

```js
Harmonica.init({
  headings: '.harmonica-header',
  articles: '.harmonica-content',
  activeClass: 'harmonica-header-active'
});
```
