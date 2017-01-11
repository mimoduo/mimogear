# Github Pages

Mimogear uses gulp-gh-pages to help push to the gh-pages branch of your github repository. You won't have to set this step up but for it to be really useful you'll want to setup Travis CI. By integrating with Travis CI, you'll be able to deploy to the gh-pages branch whenever you commit to master.

## Direct Deployment

Deploying sites directly to the gh-pages branch can be accomplished through the command line rather than through Travis CI:

```sh
gulp ghPages --base --min --production
```
