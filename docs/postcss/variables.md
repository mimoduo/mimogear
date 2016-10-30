#Variables

Variables are housed within the configuration.js file within the root of Mimogear. This provides the additional benefit of being able to use these variables outside postcss such as the gulpfile. The downside of this method is that every time a variable is changed, the gulp task will have to be re-run for the changes to take effect.

* fonts
  * font-family
  * body font-size
  * body line-height
* headings
  * font-size
  * line-height
* media queries
  * compartment boundary
  * query widths / incremented by 100

Colors were excluded in order to provide the freedom of choosing the color naming convention of your choice. The following list provides two sets of examples of naming conventions you can take inspiration from. The first set is easy to write and color agnostic. The second set clearly defines the color and is easy to refer to.

```js
"$m1": "#aae", // Main Color One
"$s1": "#eee", // Shade Color One
"$mint": "#98ff98", // Name of Color
"$light-gray": "#ddd", // Name of Color
```
