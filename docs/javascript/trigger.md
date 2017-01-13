# Trigger

A trigger provides a way of toggling, adding, and removing classes on certain elements.

## Quick Use

To get started with Trigger, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
var newTrigger = Trigger.init({
  trigger: '.new-trigger',
  bodyClass: 'new-trigger-activated'
});
```

Then you'll want to add in some trigger markup into your pug page. This example uses the markup that is required by default:

**Pug**

```pug
button.trigger
```

## Module Settings

```js
var newTrigger = Trigger.init({
  trigger: '.trigger-selector', // class of the trigger
  class: 'trigger-class', // class to add to the trigger
  parentClass: 'parent-class', // class to add to the parent
  bodyClass: 'body-class', // class to add to the body
  target: aTrigger, // variable representing another trigger
  toggle: true, // are classes going to be toggled or added by default?
  remove: false // used with the target option, removes the target classes
});
```
