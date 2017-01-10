# Deployments

Mimogear integrates with gh-pages, netlify, and surge for hosting deployments. Travis CI is used to trigger builds and deployments. Most of the setup required to host and deploy can be a little tricky but Mimogear aims to make it as simple as possible.

## Creating Oauth Tokens

Each Content Delivery Network requires a personal access token for service to authenticate you as a deployer. Below is a list of places you can go to create a personal access token for deployments with that service:

* github pages: https://github.com/settings/tokens
* netlify: https://app.netlify.com/applications
* surge: via command line: `surge token`
