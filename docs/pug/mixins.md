#Mixins

Mixins are a great way to take mini shortcuts within pug. The available Mimogear mixins are already included into the main template file so there is no need to worry if you're wondering if they will be there on a page level. If you wish to create additional mixins, make sure to create them within the pug/mixins folder and to also include them within your template under pug/templates.

##Section

The section mixin allows you to pass in content to a common structural element. By default it's a container element and a nested element that keeps content within a predefined boundary.

```pug
+section
  p Any pug code can be nested here
```

If there's a need to modify a section beyond it's original styles, there is an optional parameter to accomplish this. This will add a class to the section element that will be injected into the template.

```pug
+section("condensed-section")
  p Any pug code can be nested here
```

##Symbol

The symbol mixin allows you to inject icons into your html using the automatically generated svg sprite. By calling the name of the icon, pug will generate an svg that calls a symbol related to that icon within the sprite.

```pug
+symbol("arrow-forward")
```

If there's a need to modify an icon behond it's original styles, there is an optional parameter to accomplish this. This will add a class to the svg element that will be injected into the template.

```pug
+symbol(
  "arrow-forward",
  "larger-arrow-forward"
)
```
