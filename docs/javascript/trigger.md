#Trigger

A trigger provides a way of enabling a class on the body element after clicking a specified trigger element.

##Quick Use

To get started with triggers, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
Trigger.init();
```

Then you'll want to add in some trigger markup into your pug page. This example uses the markup that is required by default:

**Pug**

```pug
button.trigger
```

##Module Defaults

The following example shows the defaults for each of the available settings:

**Javascript**

```js
Trigger.init({
  trigger: '.trigger', // Class String: The selector of the desired trigger
  activeBodyClass: 'trigger-activated' // String: The class applied to the document body upon trigger activation
});
```
