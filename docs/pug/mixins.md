#Mixins

Mixins are a great way to take shortcuts within pug. The available Mimogear mixins are already included into the main template file. This will allow you to use the default mixins within each page that extends the default site template.

##Adding a New Mixin

In order to add a new mixin, first create a pug file within src/pug/mixins. After you've successfully created your mixin, make sure to add it to your desired template within pug/templates.

```pug
include ../mixins/symbol.pug
include ../mixins/section.pug
include ../mixins/new-mixin.pug
```

##The Section Mixin

The section mixin allows you to pass in content to a common structural element. By default it's a container element and a nested element that keeps content within a predefined boundary.

**Pug**

```pug
+section
  p Any pug code can be nested here
```

**HTML Output**

```html
<div class="section">
  <div class="compartment">
    <p>Any pug code can be nested here</p>
  </div>
</div>
```

Sometime's you may need to modify a section beyond it's default styling. By passing in a string, the section mixin will generate an alternate class.

**Pug**

```pug
+section("condensed")
  p Any pug code can be nested here
```

**HTML Output**

```html
<div class="section section-condensed">
  <div class="compartment">
    <p>Any pug code can be nested here</p>
  </div>
</div>
```

##The Symbol Mixin

The symbol mixin allows you to add icons into your html by linking to svg symbols within the automatically generated svg-sprite.

**Pug**

```pug
+symbol("arrow-forward")
```

**HTML Output**

```html
<svg class="symbol symbol-arrow-forward">
  <use xlink:href="#arrow-forward"></use>
</svg>
```

The symbol mixin can also be nested within other elements.

**Pug**

```pug
.reason
  +symbol("arrow-forward")
  span.reason-label Awesome
```

**HTML Output**

```html
<div class="reason">
  <svg class="symbol symbol-arrow-forward">
    <use xlink:href="#arrow-forward"></use>
  </svg>
  <span class="reason-label">Awesome</span>
</div>
```

Sometime's you may need to modify a symbol beyond it's default styling. By passing in an extra string parameter, separated by a comma, the symbol mixin will generate an alternate class.

**Pug**

```pug
+symbol(
  "arrow-forward",
  "larger"
)
```

**HTML Output**

```html
<svg class="symbol symbol-arrow-forward symbol-arrow-forward-larger">
  <use xlink:href="#arrow-forward"></use>
</svg>
```
