#Lantern

A lantern (lightbox) allows the user to see an enlarged picture after interacting with a smaller thumbnail.

##Usage With Default Options Shown

```pug
.lantern
img.lantern-light.full-width(
  src="http://i.imgur.com/TN4ivtD.jpg"
  title="The 'Cathedral Cliffs' of Kauai's Na Pali Coast. Kauai, Hawaii "
)
img.lantern-light.full-width(
  src="http://i.imgur.com/SOABm96.jpg"
  title="Petrified Forest National Park, Arizona"
)
```

```js
Lantern.init({
  lantern: '.lantern',
  lanternLights: '.lantern-light',
  symbols: {
    prev: '#arrow-back',
    next: '#arrow-forward',
    close: '#close'
  },
  activeClass: 'lantern-active',
  activeBodyClass: 'latern-triggered'
});
```
