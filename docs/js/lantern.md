#Lantern

A lantern (lightbox) allows the user to see an enlarged picture after interacting with a smaller thumbnail. Captions are not enabled by default, however, you can read about how to add them within the [postcss/mimo documentation](https://github.com/mimoduo/Mimogear/blob/master/docs/postcss/mimo.md#lantern)

##Notes

* The lantern is placed at the bottom of the image group for better keyboard accessibility

##Usage With Default Options Shown

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

**Javascript**

```js
Lantern.init({
  lantern: '.lantern',
  lanternLights: '.lantern-light',
  symbols: {
    previous: '#arrow-back',
    next: '#arrow-forward',
    close: '#close'
  },
  activeClass: 'lantern-visible'
});
```
