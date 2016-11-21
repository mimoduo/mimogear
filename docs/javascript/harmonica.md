#Harmonica

A harmonica (tabs) provides a way to have accordions on smaller screens and eventually harmonicas on a larger screen.

##Quick Use

To get started with harmonicas, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
Harmonica.init();
```

Then you'll want to add in some harmonica markup into your pug page. This example uses the markup that is required by default:

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

##Module Defaults

The following example shows the defaults for each of the available settings:

```js
Harmonica.init({
  headings: '.harmonica-header', // Class String: The button that activates the content
  articles: '.harmonica-content', // Class String: The content that is activated by the button
  symbols: {
    open: '#open', // Link String: The open control svg in the accordion view
    close: '#close' // Link String: The close control svg in the accordion view
  },
  harmonicaView: 900, // Integer: Breakpoint at which to switch to harmonica view
  activeClass: 'harmonica-header-active' // String: The class applied to an active header
});
```
