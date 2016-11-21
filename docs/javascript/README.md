#Using Javascript in Mimogear

Mimogear uses straight up javascript to get the job done. All the work for creating slideshows, ligthboxes, accordions, tabs, and drawers has already been taken care of for you.

##Mimo Modules

Since all the mimo modules described in the introductory paragraph above are enabled by default, all you'll need to do on your end is to add the markup to your page that matches what the mimo modules require. To get an idea of what each module needs check out the individual docs in the list below:

* [Slideshow](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/sail.md)
* [Ligthbox](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/lantern.md)
* [Accordions/Tabs](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/harmonica.md)
* [Triggers](https://github.com/mimoduo/Mimogear/blob/master/docs/javascript/trigger.md)

##Recommended Workflow

To get started with your own modules, either add your common javascript into /src/site/main.js, or start creating separate .js files within /src/site/. It's a good idea to keep your javascript files separate to help visually encapsulate each module.
