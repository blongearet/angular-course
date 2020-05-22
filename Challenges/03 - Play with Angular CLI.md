# 03 - Play with Angular CLI

No Challenge here but some commands to play with 💪.

You must install `@angular/cli` globally to use `ng` command:

`$ npm

## A. Creating a New Angular Application

`ng new`: create a new directory & initialize the angular project inside the new directory

🔖 [CLI doc for ng new](https://angular.io/cli/new)

❓ Run `$ ng new --help` to see options

## B. Running your application

Type `ng serve` into you app directory.

To stop the process, hit `ctrl + c`.

🔖 [CLI doc for ng serve](https://angular.io/cli/serve)

❓ Run `$ ng serve --help` to see options

## C. Generate code to your application

You can generate code easily by using `ng generate` as:
- class
- component
- directive
- enum
- module
- pipe
- service
- etc.

Some example below:

```
ng generate component my-component
ng generate service my-service

ng g c my-component-new
ng g p my-pipe
```

🔖 [CLI doc for ng generate](https://angular.io/cli/generate)

❓ Run `$ ng generate --help` to see options

## D. Running unit tests

Angular generator also provide spec files with default tests.
You can run them by type `ng test` in the directory.

🔖 [CLI doc for ng test](https://angular.io/cli/test)

❓ Run `$ ng test --help` to see options

## E. Running End-to-end (e2e) tests

A end-to-end folder is created at the root level.
You can run them by type `ng e2e` in the directory.

🔖 [CLI doc for ng e2e](https://angular.io/cli/e2e)

❓ Run `$ ng e2e --help` to see options

## F. Building you application

Once you finished you dev, you can easily build your application with the `ng build` command.
You can specify a target like development, production or custom environment to populate the compilation with the related environment variables.

🔖 [CLI doc for ng build](https://angular.io/cli/build)

❓ Run `$ ng build --help` to see options

## Next step

[03 - Introduction to Components](./04%20-%20Introduction%20to%20components.md)