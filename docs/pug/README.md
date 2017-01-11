# Using Pug in Mimogear

Pug let's us write a simpler form of HTML while also giving us the ability to use template inheritance, variables, and mixins.

## Before You Start

Pug is super strict with indentation - so strict _pug will throw an error if you're using anything other than 2 spaces for indentation with Mimogear_. Make sure to update your editor's configuration before you start developing in pug!

## Customizing Navigation

Navigation in pug is handled through a few pug loops that use configuration.json as a data set. By customizing the links object found in configuration.json, you can alter the output of each navigation partial. Detailed documentation on customizing navigation can be found in the [partials documentation](https://github.com/mimoduo/mimogear/tree/master/docs/pug/partials.md).

## Modifying the Base Template

The base template is what is used as the foundation for each page. This template can be found in /src/pug/template.pug. _Any changes you make to this file will also be applied to every page that uses this template_. Of course, feel free to create your own template as well.

## Adjusting the Head, Header, and Footer

Every site has a head section. Most sites have a header and footer too. To adjust these regions, which are included on every page by default, head over to /src/pug/regions/. Regions contain a bunch of extras which can read more about in the [regions documentation](https://github.com/mimoduo/mimogear/tree/master/docs/pug/regions.md).

## Creating a Page

Once you've adjusted the base template file and the region files to your liking, check out /src/pug/pages/. Any pug file you create here will be compiled to its respective path in the root of Mimogear _which includes creating subfolders_. There's a starter.pug file to serve as the simplest form of a pug page available. At the very least, a pug page in Mimogear will have an `extend` and `block content`:

```
extend ../template.pug

block content
```

If you need any help with pug pages, check out the [pages documentation](https://github.com/mimoduo/mimogear/tree/master/docs/pug/pages.md) for more information.

**If you have a question about what something is, there is a detailed set of docs found in [Mimogear's pug docs](https://github.com/mimoduo/mimogear/tree/master/docs/pug/).**
