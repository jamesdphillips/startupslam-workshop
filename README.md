# slerk-web

Derp de derp.

Have header/cookie/query param/whatever that controls the API endpoint. This allows the test runner to run code without interfering with calls in their existing sandbox.

TODO:
 * [ ] get Travis+tests working.
 * [ ] fix server-side vendor exclusions.
 * [ ] avoid entrypoints being included in common bundles
 * [ ] able to inject html-shim into head
 * [ ] favicon.
 * [ ] proper contributing file.

NOTES:
 * config/webpack/*.js has the .babel.js extension to automatically invoke babel. Why this can't be configured as an environment setting or global is beyond me. This is dumb and I want to fix it.

## Configuration

Application configuration is handled via environment variables. http://12factor.net/config

| Environment Variable | Default Value | Description                           |
| ==================== | ============= | ===================================== |
| NODE_ENV             | development   | Environment running in.               |
| API_URL              | `undefined`   | Endpoint to send API requests to.     |
| PORT                 | 0             | Port on which requests are served.    |

## Development

Setup

```sh
nvm install 4
git clone SOMEURL slerk-web
cd slerk-web
npm install
```

Running the development server.

```sh
echo "PORT=8080" >> .env
npm run dev
```

## Deployment

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/metalabdesign/slerk-web)


```sh
brew install heroku
gem install travis

heroku login
travis encrypt $(heroku auth:token) --add deploy.master.api_key
```


We use [TravisCI] to handle our continuous integration and deployment needs. Every git commit automatically triggers a build on CodeShip and only builds for which all tests pass are allowed to be merged into `master`. The integration test used is simply `npm test`.

Once a successful build is merged into `master` [TravisCI] then automatically pushes the appropriate changes through [Heroku] to update the staging environment.
