# Challenges

List all our challenges for this Angular course

## 01 - Introduction

[:octocat: step-00 (ou master)](https://github.com/blongearet/angular-course-app)

No Challenge here but some commands to type in a terminal.

1. Install NVM (https://github.com/creationix/nvm#install-script)
2. Install a Node Version through NVM
```
nvm install 11
nvm alias default 11
```
3. Install (`angular-cli`)[https://cli.angular.io]
`npm install -g @angular/cli
4. Create a working directory
```
mkdir ~/workspace
cd ~/workspace
```
5. Boostrap an angular cli application
```
ng new myProjectName
cd myProjectName
# Run the application through http://localhost:4200
ng serve
```

### Bonus

Take a look at https://yarnpkg.com to get a faster Node Package Manager

## 02 - TypeScript

:octocat: Challenge can be found in a separated github repository [blongearet/angular-course-typescript](https://github.com/blongearet/angular-course-typescript)

Take a look at the slides and use Internet wonderful search engine to do all the exercices.

### How to

```
# Dans un premier terminal
cd GIT_PROJECT_PATH/TypeScript
npm run start-01

# Dans un second terminal
cd GIT_PROJECT_PATH/TypeScript
npm run test-01
```

(and update the 01 by the targeted step)

You have to fix all tests (should be green in the terminal window) by updating part specified by a `// _` or a `_`.

## 03 - Play with Angular CLI

No Challenge here but some commands to play with 💪.

You must install `@angular/cli` globally to use `ng` command:

`$ npm

### A. Creating a New Angular Application

`ng new`: create a new directory & initialize the angular project inside the new directory

🔖 [CLI doc for ng new](https://angular.io/cli/new)

❓ Run `$ ng new --help` to see options

### B. Running your application

Type `ng serve` into you app directory.

To stop the process, hit `ctrl + c`.

🔖 [CLI doc for ng serve](https://angular.io/cli/serve)

❓ Run `$ ng serve --help` to see options

### C. Generate code to your application

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

### D. Running unit tests

Angular generator also provide spec files with default tests.
You can run them by type `ng test` in the directory.

🔖 [CLI doc for ng test](https://angular.io/cli/test)

❓ Run `$ ng test --help` to see options

### E. Running End-to-end (e2e) tests

A end-to-end folder is created at the root level.
You can run them by type `ng e2e` in the directory.

🔖 [CLI doc for ng e2e](https://angular.io/cli/e2e)

❓ Run `$ ng e2e --help` to see options

### F. Building you application

Once you finished you dev, you can easily build your application with the `ng build` command.
You can specify a target like development, production or custom environment to populate the compilation with the related environment variables.

🔖 [CLI doc for ng build](https://angular.io/cli/build)

❓ Run `$ ng build --help` to see options