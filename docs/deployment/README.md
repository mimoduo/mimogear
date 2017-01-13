# Deployments

Mimogear integrates with [github pages](https://pages.github.com/), [surge.sh]((https://surge.sh/)), and [netlify](https://www.netlify.com/) for hosting deployments. [Travis CI](https://travis-ci.org/) is used to trigger builds and deployments meaning Mimogear works well with [Prose.io](http://prose.io/).

Most of the setup required to host and deploy can be a little tricky but Mimogear aims to make it as simple as possible. Of course, feel free to choose the service that works for you.

## Configuring Travis CI

If you plan to use Travis CI for deployments (which is really awesome!), make sure to edit some of the unique fields there:

* `before_script`: git url and user.email
* `after_success`: surge domain
* `env: global: secure`: github access token
