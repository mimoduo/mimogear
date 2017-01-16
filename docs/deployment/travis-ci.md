# Travis CI

[Travis CI](https://travis-ci.org) triggers a build as soon as a you commit to your github repository. It's a little hard to set up the github access token for travis, but afterwards you'll have quite the power.

## Getting Started

First, make an account over at [Travis CI](https://travis-ci.org). You'll be asked to enable some permissions for Travis to interact with Github. Directly after setting up your account, flip the little switch in your account detail page to integrate your static site's repository.

## Update the Configuration File

* `before_script`: git url and user.email
* `after_success`: surge domain
* `env: global: secure`: github access token

## Creating a Github Access Token

To create a github access token first sign in to github and go to the [personal access tokens](https://github.com/settings/tokens) section. Click the "Generate Access Token" button in the upper right hand corner. Login real quick and then fill in a token name. _The name of the token is just to help you remember what it is_. After that, select only the **repo** scope for the token under "Select Scopes":

![repo access settings](http://image.prntscr.com/image/e2d9a0e9e4d547d8b4f023b6d68748b1.png)

### Encrypting Your Token

The best thing to do to keep your token top secret is to encrypt it using travis's command line. This is especially important since we'll be putting this token straight into the .travis.yml file!

For this step, we'll need to use ruby to run the `gem install travis` command. You may already have ruby on your machine but if not check out the [ruby installer page](https://rubyinstaller.org/downloads/) to get setup. Afterwards, run the following commands in your terminal:

```sh
gem install travis
travis encrypt GH_TOKEN=Github auth token
```

The result will be and encrypted version of your top secret token. Place this token right in the `env: global: secure` field of the .travis.yml file:

```yml
env:
  global:
    secure: TOKEN
```

**At this point, Github integration is complete!**
