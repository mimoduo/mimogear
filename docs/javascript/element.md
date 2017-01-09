# Element

Element is a quick way to create and assign a basic element in javascript to a variable.

## Quick Use

To get started with Element, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
var newEl = El.create({
  class: 'my-class'
});
```

**Value of newEl**

```
<div class="my-class"></div>
```

## Module Defaults

The following example shows a complete use case for the Element function:

**Javascript**

```js
var newEl = El.create({
  kind: 'p', // kind of element you're creating
  class: 'my-class', // class of the new el, accepts an array of classes as well
  type: 'text', // type of input
  value: 'value of input', // value of the input
  innerHTML: 'Lots of Text', // any html to add into new el
  attributes: { // an object of attribute: 'value' pairs to add to new el
    anyLabel: 'value of attribute',
    anotherLabel: 'value of attribute'
  },
  on: ['click', functionToRun] // array: 'event', function
})
```
