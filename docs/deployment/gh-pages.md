# Github Pages

[Github pages](https://pages.github.com/) is a great way to host your site and share to others, especially if you're site is already in a github repository. Mimogear uses [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) to help push to the gh-pages branch of your github repository.

## Direct Deployment

Deploying sites directly to the gh-pages branch can be accomplished through the command line by passing in a the ghPages task and the production facing flags:

```sh
gulp ghPages --base --min --production
```
