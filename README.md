# Marvel Comics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running Cypress tests

Run `npm run cy:run` to execute the Cypress tests.

---

## Modules

This app has the following modules:

### Core

Core module includes some shared code such as `Header Component` and `Http Interceptor`.

### Comics

Comics module is our application main feature module. It includes 2 components: `Comics Detail` and `Comics List`. It also includes a `state` folder with the state of the module

## UI

I have used the official library of [Angular Material](https://material.angular.io/) for the visual components.

## State

For the state I've used [ngxs](https://www.ngxs.io/). Although it's not the most popular or mature solution for state management in the Angular ecosystem ([ngrx](https://ngrx.io/) comes to my mind), I find `ngxs` an interesting alternative, with less boilerplating code and same features than `ngrx`. What makes it different to another alternatives such as `ngrx` or `Redux` is that in this case, we don't have `reducers`, neither `effects`, `thunks` or `sagas`. All is managed on `Action` handlers inside the `State` file.

## Testing

I have used [Cypress](https://www.cypress.io/) to make two example tests of the comics components.

## Things that I would add in the future

* It should be interesting to add some Unit Tests to the components to complete the testing suite.

* I would also add [Storybook](https://storybook.js.org/) to have an environment where I could develop components in isolation and also have a showcase of them, including documentation.

* Maybe it would also be a good decision to add a [Docker](https://www.docker.com/) configuration to the project in order to make easier the CI and deployment phases.

