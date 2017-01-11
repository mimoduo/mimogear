# Blocks

Blocks in Mimogear interact with the site template to help you pass in content to your pages. They can also clear out sections of a template or even pass in new variables.

## title

The page title is the little blurb that'll show up in your browser tab. Pass in `- title = "A Browser Tab Title"` to the _title block_ to help switch up that little blurb of your page:

```pug
block title
	- title = ""
```

## description

The page description is a meta field up in the head element that helps describe your page to search engines. Pass in `- description = "A description here"` to the _description block_ to change the description of your page:

```pug
block description
	- description = ""
```

## theme

Sometimes a page can be pretty unique. This may mean the layout is completely different but if the case is just a few styles then there's a theme block to help out. Pass in `-themeName = "mimo-theme"` to the _theme block_ to add a class to the body as a theme hook for your page:

```pug
block theme
	- themeName = ""
```

## content

This is likely going to be the most frequently used block you'll use. The _content block_ is where all the content of your page is going to live. Pass in any pug markup to the _content block_ to add in some content to your page:

```pug
block content
```

## header & footer

The header & footer block are blocks you may not use that often but nevertheless they are there anyway. To replace markup in the header and footer, pass in any pug markup to the _header block_ or _footer block_:

```pug
block header
block footer
```

If you want to **add** markup to a header or footer, rather than replacing it, pug has both the prepend and append functions. The `prepend` function lets you place markup before any pre-existing markup from your template. The `append` function does the opposite by letting your place markup after any pre-existing markup.

```pug
block prepend header
block append header

block prepend footer
block append footer
```

## Additional Assets

Mimogear has 2 blocks to help add in some additional assets to your page. This helps separate the difference between styles and scripts that are on every page versus a special case on one page.

```pug
block additional-stylesheets
block additional-scripts
```
