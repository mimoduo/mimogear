# Lantern

A lantern is a lightbox that allows the user to see an enlarged picture after interacting with a smaller thumbnail. It works but grabbing the data from identifiable lantern images and then cycling through that set of data.

## Quick Use

To get started with Lantern, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
Lantern.init();
```

Then you'll want to add in some lantern markup into your pug page. This example uses the markup that is required by default:

**Pug**

```pug
img.lantern-light(
  src="http://i.imgur.com/TN4ivtD.jpg"
  title="The 'Cathedral Cliffs' of Kauai's Na Pali Coast. Kauai, Hawaii"
)
img.lantern-light(
  src="http://i.imgur.com/SOABm96.jpg"
  title="Petrified Forest National Park, Arizona"
)
.lantern
```

## Module Defaults

The following example shows a complete set of options within Lantern:

**Javascript**

```js
Lantern.init({
  lantern: '.lantern', // selector of lantern container
  lanternLights: '.lantern-light', // class of injected image
  previous: '#arrow-back', // previous control svg icon
  next: '#arrow-forward', // next control svg icon
  close: '#close' // close control svg icon
  activeClass: 'lantern-visible' // class to apply to a visible lantern
});
```
