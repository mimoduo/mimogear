#Navigation

Each postcss navigation partial should refer to its respective pug partial. This makes navigation changes easier down the road. If you're wondering where some of the links are coming from, they are populated via configuration.json.

##Behaviors

Behaviors dictate how each navigation will look by default, includes interactivity for dropdowns, and also styles the skip link that is included on every page.

##Template

In practice, each nav can be fairly unique. For that reason, a template navigation partial was created in order to have a go-to partial to copy into another unique partial for your new nav.

##Main

The main nav usually includes some more complicated styles compared to other navs. Because of this, direct child selectors were used in order to selectively style root links versus child links.
