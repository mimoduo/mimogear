#Using Javascript in Mimogear

Mimogear uses straight up javascript. All the work for creating slideshows, ligthboxes, accordions, tabs, and drawers has already been setup for you.

##Using Mimo Modules

Since all the mimo modules described in the introductory paragraph above are _enabled by default_, all you'll need to do on your end is to add the markup to your page that matches what the mimo modules require. To get an idea of what each module needs check out the individual docs in the list below:

* [Slideshow](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/sail.md)
* [Ligthbox](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/lantern.md)
* [Accordions/Tabs](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/harmonica.md)
* [Triggers](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/trigger.md)

##Creating a New Module

To add a new module to integrate into the main javascript file, add additional javascript files into /src/js/site/. Mimogear follows the module pattern as written in the [Oneone javascript file](https://github.com/mimoduo/Oneone/blob/master/src/script.js).

##Adding a Vendor Javascript File

Any javascript that comes from a source outside of Mimogear should be included in /src/js/vender/.

**If you have a question about what something is, there is a detailed set of docs found in /docs/javascript/.**
