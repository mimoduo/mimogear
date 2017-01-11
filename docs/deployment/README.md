# Deployments

Mimogear integrates with [github pages](https://pages.github.com/), [surge.sh]((https://surge.sh/)), and [netlify](https://www.netlify.com/) for hosting deployments. [Travis CI](https://travis-ci.org/) is used to trigger builds and deployments meaning Mimogear works well with [Prose.io](http://prose.io/). Most of the setup required to host and deploy can be a little tricky but Mimogear aims to make it as simple as possible. Of course, feel free to choose the service that works for you.

## Creating Oauth Tokens

Each Content Delivery Network requires a personal access token for service to authenticate you as a deployer. Below is a list of places you can go to create a personal access token for deployments with that service:

* github pages: https://github.com/settings/tokens
* netlify: https://app.netlify.com/applications
* surge: via command line: `surge token`
