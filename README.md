# Finnish Transport Infrastructure Agency - Service platform for publications
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to develop locally

Prerequisites:
- [Node.js](https://nodejs.org/en/) v14.15.1 or greater
- [yarn](https://yarnpkg.com/) package manager

Go to the project root and install dependencies

```bash
yarn install
```

Start the development server
```bash
yarn start
```

The application should open to [http://localhost:3000](http://localhost:3000)

## Create a production build

Run one of the following scripts depending on the target environment.

```bash
yarn run build:test
yarn run build:prod
```

This will bundle the assets to a `build` folder in the project root. Copy the assets in the build folder to wherever the application will be served from.


## Development setup

For the development environment to work correctly, you must rename
1. `.env.local.example -> .env.local`
2. `yarn start`
3. open [localhost:3000](http://localhost:3000/)

## Ci/CD
Installed read-inject-env to allow change to environment variables after building static files.

Example to set variable REACT_APP_FOLDERS_URL `REACT_APP_FOLDERS_URL="value" npx react-inject-env set`
This creates new build/env.js file which is applied to every page load because it is loaded in public/index.html
Values in build/env.js overrides values in process.env.*

CI flow->
1. Download release
2. Unpack zip
3. Run command to set environment variables
    1. `REACT_APP_FOLDERS_URL="value" npx react-inject-env set`
    2.  To add multiple values on same line `REACT_APP_FOLDERS_URL="value" REACT_APP_FOLDERS_URL_2="value2" && npx react-inject-env set`
4. Upload all files to S3 bucket to be hosted.


