## 06 - Data binding & Pipes

*Start from [step-05 branch](https://github.com/blongearet/angular-course-app/tree/step-05)*

1. Pipes
    1. Create a pipe called `productSearch` into the folder `src/app/product`
    2. Copy the content of the method `getFilteredProducts()` into the Pipe and adapt it to the `transform` method of the pipe
    3. Use the Pipe into the `product-list.component.html` ([Pipe documentation](https://angular.io/guide/pipes#pipes))
    4. Enhance the `searchProduct` pipe to find in all `String` values of the given array (instead of only into the `productName`). It means that you not receive only `Product[]` but `any[]`!

**SOLUTION:** :octocat: [step-06 branch](https://github.com/blongearet/angular-course-app/pull/4)

## Next step

[07 - More on component](./07%20-%20More%20on%20component.md)