# Using Javascript in Mimogear

Mimogear follows the module pattern as written in the [oneone javascript plugin boilerplate](https://github.com/mimoduo/oneone/blob/master/src/script.js). By default you'll have access to element creation shorthand, slideshows, lightboxes, and triggers.

## Using Mimo Modules

Since all the mimo modules described in the introductory paragraph above are _enabled by default_, all you'll need to do on your end is to add the markup to your page that matches what the mimo modules require. To get an idea of what each module requires check out the individual docs in the list below:

* [Element](https://github.com/mimoduo/mimogear/blob/master/docs/javascript/element.md)
* [Slideshow](https://github.com/mimoduo/mimogear/blob/master/docs/javascript/sail.md)
* [Ligthbox](https://github.com/mimoduo/mimogear/blob/master/docs/javascript/lantern.md)
* [Triggers](https://github.com/mimoduo/mimogear/blob/master/docs/javascript/trigger.md)

## Creating a New Module

To add a new module, add any additional javascript files into /src/js/site/. Theses files will be automatically concatenated into the main javascript file. Mimogear uses the module pattern found in [Oneone javascript file](https://github.com/mimoduo/Oneone/blob/master/src/script.js) and described in [Todd Motto's post](https://toddmotto.com/mastering-the-module-pattern/) but feel free to use the pattern you're comfortable with.

## Adding a Vendor Javascript File

Any javascript that comes from a source outside of Mimogear should be included in /src/js/vender/. Theses files will be automatically concatenated into the main javascript file.

**If you have a question about what something is, there is a detailed set of docs found in /docs/javascript/.**
