# Travis CI

Travis CI helps run commands as soon as a you commit to your github repository. It's a little hard to set up the github access token for travis, but afterwards you'll have quite the power.

## Creating a Github Access Token

To create a github access token first sign in to github and go to the [personal access tokens](https://github.com/settings/tokens) section. Click the "Generate Access Token" button in the upper right hand corner. Login real quick and then fill in a token name. _The name of the token is just to help you remember what it is_. After that, select only the **repo** scope for the token under "Select Scopes":

![repo access settings](http://image.prntscr.com/image/e2d9a0e9e4d547d8b4f023b6d68748b1.png)

### Encrypting Your Token

```sh
gem install travis
travis encrypt GH_TOKEN=Github auth token
```
