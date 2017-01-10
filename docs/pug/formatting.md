# Formatting

Pug is a strict enforcer of its own language format. There is one forgiving aspect that will be addressed to help ensure consistency during production.

**Make sure that you are writing using 2 spaces.** _Pug will throw an error otherwise!_

## Multiple Attributes

If your element has multiple attributes, make sure they are entered on a new line, declared with double quotes, and separated without commas.

```pug
img.lantern-light.full-width(
  src="./dist/images/port-clyde.jpg"
  alt="A symmetrical scene of a lamp between two beds at a b&b at Port Clyde"
  title="Quite a charming room"
)
```
