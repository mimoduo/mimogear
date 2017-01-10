# surge

Mimogear integrates with surge using a surge cli, gulp-surge, and Travis CI.

## Direct Deployment

Deploying sites directly to domain.surge.sh can be accomplished through the command line rather through Travis CI. Make sure to change the domain in .travis.yml before you run this task.

```sh
gulp surge --min --production
```

## Travis CI Deployment

[Surge](https://surge.sh/) itself has some [excellent documentation]((https://surge.sh/help/integrating-with-travis-ci)) on integrating with Travis CI.

**Notes**

* The token and email you input into the Travis CI is hidden from others
* Make sure to change the domain in .travis.yml before you commit
