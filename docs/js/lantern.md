#Lantern

A lantern (lightbox) allows the user to see an enlarged picture after interacting with a smaller thumbnail.

##Quick Use

To get started with lanterns, add in the following line inside the anonymous function found in /src/site/main.js:

**Javascript**

```js
Lantern.init();
```

Then you'll want to add in some lantern markup into your pug page:

**Pug**

```pug
img.lantern-light(
  src="http://i.imgur.com/TN4ivtD.jpg"
  title="The 'Cathedral Cliffs' of Kauai's Na Pali Coast. Kauai, Hawaii "
)
img.lantern-light(
  src="http://i.imgur.com/SOABm96.jpg"
  title="Petrified Forest National Park, Arizona"
)
.lantern
```

##Module Defaults

The following example shows the defaults for each of the available settings:

**Javascript**

```js
Lantern.init({
  lantern: '.lantern', // Class String: The selector of the lantern content container
  lanternLights: '.lantern-light', // Class String: The class of the image to inject into the lantern content container
  symbols: {
    previous: '#arrow-back', // Link String: The previous control svg in lantern view
    next: '#arrow-forward', // Link String: The next control svg in lantern view
    close: '#close' // Link String: The close control svg in lantern view
  },
  activeClass: 'lantern-visible' // String: The class applied to an active lantern
});
```
