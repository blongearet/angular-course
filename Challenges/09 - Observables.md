# 09 - Observables

This part `09 - Observables` is a mix of examples (01 to 05) and one challenge (06).
It's a demonstration about what does mean an observable in raw javascript to got
what is under the hood.

## Files from 01 to 05

These files are examples to show you 

*[./observable/01.html](./01.html) & [./observable/01.js](./01.js)*

Snippet about listening click on a DOM element

*[./observable/02.html](./02.html)*

Snippet about how iterate over all element in a collection

*[./observable/03.html](./03.html) & [./observable/03.js](./03.js)*

Snippet about how we consume an asynchronous data once

*[./observable/04.js](./04.js)*

Snippet about how we consume an asynchronous data all over the time

*[./observable/05.js](./05.js)*

Usage of RxJS

## Files from 06-00 to 06-10

*[./observable/06-00.js](./06-00.js)*

This file is the beginning for the following challenge steps:

1. Implement a `console.log` on each callbacks (next, error, complete) and a method `giveMeSomeData` (with three arguments) which will display all element of a collection using the `nextCallback` method
2. Manage sync & async code
  
    2.1 Refactor three callbacks into on "observer" object with three properties: `next`, `error` and `complete`

    2.2 Update the `giveMeSomeData` method to get only one argument (instead of three callbacks) which the previous created observer object

    2.3 Update the `giveMeSomeData` by adding a call to the complete callback from observer, right after the forEach

3. Move the `giveMeSomeData` method into an object called `observable` into the property `subscribe`

4. Duplicat the `observale` object and name all these two object into `clickObservable` & `arrayObservable`

*Other 06-XX.js files are solutions*

1. 

Snippet about how we consume an asynchronous data once

Please find examples there https://github.com/blongearet/angular-course/blob/master/Challenges/observable

## Next step

[10 - Retrieving data using HTTP](./10%20-%20Retrieving%20data%20using%20HTTP.md)