# OAuth2 Example Client

Oauth2 authentication example, based on @ging's [OAuth2 Example Client](https://github.com/ging/oauth2-example-client)

This version is being used to authenticate and retrieve user data from a Drupal site.

## Usage

Install `nodejs` and `npm`.

Change to the project directory and run

    npm install

Configure OAuth2 credentials in config.js file. These must match your OAuth2 server configuration.

Start example server

    node server

Connect to the URL displayed in console.

## Drupal-side configuration

### OAuth2 Configuration

This example uses Drupal's [OAuth2 Server](http://drupal.org/project/oauth2_server) module.

Configure a server with the following:

* Server options: Use OpenID Connect, Unset refresh token after use
* Server grants: Auth code, Client creds, Refresh token, User creds
* Client ID and secret match `config.js`
* Client redirect URI: http://localhost:8021/login (or per `config.js`)

### Services configuration

For the user info retrieval to work, enable Drupal [Services](http://drupal.org/project/services) and configure it. You want a Services resource which provides a REST server at `/api` and exposes user retrieval for the information you want, with OAuth2 authentication.
