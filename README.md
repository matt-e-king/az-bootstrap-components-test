# az-bootstrap-components

This project uses `yarn` and `yarn workspaces` for package management. Follow the docs to [install yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

## Get started
```
git clone git@github.com:matt-e-king/az-bootstrap-components-test.git
cd az-bootstrap-components-test
yarn
```

Since this project is setup using [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces/), running `yarn` in the root will install all shared dependencies in the root `node_modules` folder. All `packages/projects` with dependencies that have conflicting versions will be installed in their respective `node_modules` folder.

**Please note:** `projects/react-example` and `projects/vue-example` each have a dependency that points to a sibling package in `packages` (e.g. `"@az-bootstrap-components/react": "1.0.0"`). Yarn workspaces enables this project to uses sibling projects and packages as dependencies, however they can't be installed with `yarn add`, which will attempt to download from `npm`. They must be added manually to the respective `package.json` file and then re-run `yarn`.

## Build component libraries
### React
```
// from root
cd packages/react
yarn build
```
### Vue
```
// from root
cd packages/vue
yarn build
```

Each build will:
 * create a `dist` folder with full library build
 * create an `esm` folder with non-transpiled version of components for tree shaking

Neither package has a `watch` script so `yarn build` needs to be re-ran if changes are made to the source.

## Testing library builds with example projects
Each library has a corresponding example project in the `projects` directory that is a full app, using the library build as a dependency. 

### react-example
Built using [`create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html)
```
// from root
cd projects/react-example
yarn start
```
This will spin up a dev server being served up on `locahost:3000`

### vue-example
Built using the Vue CLI, [`vue create`](https://cli.vuejs.org/guide/creating-a-project.html)
```
// from root
cd projects/vue-example
yarn start
```
This will spin up a dev server being served up on `locahost:3000`

## Styling and SCSS
Currently, for testing purposes, no SCSS is being utilized or imported into the individual UI libraries. The examples projects are pulling in the fully compiled `arizona-bootstrap` css file in the head tag of `public/index.html`.
