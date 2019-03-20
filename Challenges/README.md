# Challenges

List all our challenges for this Angular 2 course

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

## 03 - Introduction to Components

*Start from [master branch](https://github.com/blongearet/angular-course-app/tree/master)*

**Main idea: use ng generate and be familiar with basic component**

1. Create a component called `header` under the layout folder
`ng generate component layout/header`
2. Add the selector element `<app-header></<app-header>` into the main HTML `app.component.html`
3. Play with template to see what's going on
  a. Add link to welcome & products page
  b. Add code between `<app-header>` and `</<app-header>`
  c. be genious :D
4. Repeat step 1. with all required component for the application following this architecture:
```
src/
  app/
    layout/
      header/
    product/
      product-list/
      product-detail/
    shared/
      ui/
        star/
    welcome/
```

**SOLUTION:** [:octocat: step-03 branch](https://github.com/blongearet/angular-course-app/pull/1/files)

## 04 - Templates, Interpolation & Directives

*Start from [step-03 branch](https://github.com/blongearet/angular-course-app/tree/step-03)*

**Main idea: create a product list view by using *ngIf & *ngFor directives**

1. Use the ProductListComponent previously creating by add the selector element into the `app.component.html`
2. Work on the product-list component class

    1. Expose a public property boolean to display/hide all images
    2. Expose a public collection of product following the Product interface

```
    products = [
        {
            "id": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        },
        {
            "id": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "id": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        },
        {
            "id": 8,
            "productName": "Saw",
            "productCode": "TBX-0022",
            "releaseDate": "May 15, 2016",
            "description": "15-inch steel blade hand saw",
            "price": 11.55,
            "starRating": 3.7,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
        },
        {
            "id": 10,
            "productName": "Video Game Controller",
            "productCode": "GMG-0042",
            "releaseDate": "October 15, 2015",
            "description": "Standard two-button video game controller",
            "price": 35.95,
            "starRating": 4.6,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
        }
    ]
```

3. Let's display products as a list of product

    1. Add a table to display product (display image url as text)
    2. Use `*ngIf` directive to show the table if there is at least one product in the array (you can use the else part to display a message in case of no product: [doc](https://angular.io/api/common/NgIf#showing-an-alternative-template-using-else))
    3. Use `*ngFor` directive on `<tr>` element to repeat this element as many times as products in the array

4. Add a button to show/hide all images on the page (by using `(click)="toggleImage()"` for example)

5. Implement a search field to filter products shown in the table. To bind an input with a variable you should do:

    1. Add the `FormModule` to your `AppModule` by import `FormModule` from `@angular/forms`
    2. Bind the value from the ProductListComponent (like `searchTerm`) to the input field by using `ngModel` directive

`<input [(ngModel)]="searchTerm" type="text />`

**SOLUTION:** [:octocat: step-04 branch](https://github.com/blongearet/angular-course-app/pull/2/files)

6. Go further

    1. Do a zoom by click on an image!
    2. Allow a product to have multiple images and display them as a caroussel with navigation buttons

**SOLUTION "GO FURTHER":** [:octocat: step-04-more branch](https://github.com/blongearet/angular-course-app/pull/4/files)

## 05 - Pipes

*Start from [step-04 branch](https://github.com/blongearet/angular-course-app/tree/step-04)*

1. Create a pipe called `productSearch` into the folder `app/src/product`
2. Copy the content of the method `getFilteredProducts()` into the Pipe and adapt it to the `transform` method of the pipe
3. Use the Pipe into the `product-list.component.html` ([Pipe documentation](https://angular.io/guide/pipes#pipes))
4. Enhance the `searchProduct` pipe to find in all `String` values of the given array (instead of only into the `productName`). It means that you not receive only `Product[]` but `any[]`!

**SOLUTION:** [:octocat: step-05 branch](https://github.com/blongearet/angular-course-app/pull/5)

## 06 - More on components: Nested Component

*Start from [step-05 branch](https://github.com/blongearet/angular-course-app/tree/step-05)*

**ℹ We'll work on the created component `starComponent` which display the rating with stars**

1. Use this component as a Nested Component into your `product-list.component.html` to replace the `{{ product.starRating }}`
2. Create an `@Input` property called `rating` into the `starComponent`
3. Update the `StarComponent` template to display 5 stars and listen click on them to `console.log` the clicked value.
4. Create an `@Output` property called `ratingClicked` into the `starComponent` which will return the new value of the rating.
5. Listen the created `ratingClicked` event into the `ProductListComponent` to update the value into the component. 

**SOLUTION:** [:octocat: step-06 branch](https://github.com/blongearet/angular-course-app/pull/6)

## 07 - Services and dependency injection

*Start from [step-06 branch](https://github.com/blongearet/angular-course-app/tree/step-06)*

1. Create a service and a class

    1. Create a new angular service called `ProductService` in the following path `shared/model/product`
    2. Create a new class called `Product` in the same folder

2. Feed the `Product` class by moving the existing Product interface into this Class file.
3. Feed the `ProductService` by moving the collection used into the `ProductListComponent`.
4. Write a public `getProducts` method to access to this products array
5. Consume this methods into the `ProductListComponent`

**SOLUTION:** [:octocat: step-07 branch](https://github.com/blongearet/angular-course-app/pull/7)

## 08 - Observables

Please find examples there https://github.com/blongearet/angular-course/blob/master/Challenges/observables

## 09 - Retrieving data Using HTTP

*Start from [step-07 branch](https://github.com/blongearet/angular-course-app/tree/step-07)*

1. Set up the local server using the (`json-server`)[https://github.com/typicode/json-server] module

    1. Install the package using npm ▶ `$ npm install --save json-server`

    2. Create a npm script to easily run the server by adding `"api": "json-server --watch db.json` into the scripts part of `package.json`. You will be able to run `npm run api`to launch the API.

    3. Create a `db.json` file at the root of the project with the following JSON
    
```{
   "products": [
       {
           "id": 1,
           "productName": "Leaf Rake",
           "productCode": "GDN-0011",
           "releaseDate": "March 19, 2016",
           "description": "Leaf rake with 48-inch wooden handle.",
           "price": 19.95,
           "starRating": 3.2,
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
       },
       {
           "id": 2,
           "productName": "Garden Cart",
           "productCode": "GDN-0023",
           "releaseDate": "March 18, 2016",
           "description": "15 gallon capacity rolling garden cart",
           "price": 32.99,
           "starRating": 4.2,
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
       },
       {
           "id": 5,
           "productName": "Hammer",
           "productCode": "TBX-0048",
           "releaseDate": "May 21, 2016",
           "description": "Curved claw steel hammer",
           "price": 8.9,
           "starRating": 4.8,
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
       },
       {
           "id": 8,
           "productName": "Saw",
           "productCode": "TBX-0022",
           "releaseDate": "May 15, 2016",
           "description": "15-inch steel blade hand saw",
           "price": 11.55,
           "starRating": 3.7,
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
       },
       {
           "id": 10,
           "productName": "Video Game Controller",
           "productCode": "GMG-0042",
           "releaseDate": "October 15, 2015",
           "description": "Standard two-button video game controller",
           "price": 35.95,
           "starRating": 4.6,
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
       }
     ]
}
```

2. Import the `HttpClientModule` into the `AppModule`
    
3. Inject `HttpClient` into our `ProductService` and Update the `getProducts()` method to make a `get` call to our API Service `http://localhost:3000/products`

4. Use `RxJS` methods:
    1. `do` to `console.log` the JSON Object
    2. `catch` to attach a method to handle errors
    
5. Change into `ProductListComponent` the way we retrieve the data from our `ProductService`

<details><summary>More later 👀</summary>

## 09 - Retrieving data Using HTTP

*Working based on 08 source code*

1. Import the `HttpModule` into the `AppModule` (if not already done)
    1. Install the `@angular/http` module
    3. Import the `HttpModule` into our `AppModule`
2. Inject `Http` into our `ProductService`
3. Update the `getProducts()` method to make a `get` call to our API Service `http://localhost:3000/products`
4. Use `RxJS` methods:
    1. `map` to convert the string result into a JSON Object
    2. `do` to `console.log` the JSON Object
    3. `catch` to attach a method to handle errors
5. Change into `ProductListComponent` the way we retrieve the data from our `ProductService`

## 10 - Navigation and Routing Basics

*Working based on 09 source code*

1. Create a simple `ProductDetailComponent` and a `WelcomeComponent` with a basic template 
2. Import the `RouterModule` into the `AppModule` (if not already there)
    1. Install the `@angular/router` module
    2. Import the `RouterModule` into our `AppModule`
    3. Use the `RouterModule.forRoot([])` syntax to describe the application's routes (Note that `RouterModule.forChild([]) is used in angular sub-module of our application)
3. Add the `<router-outlet></router-outlet>` instead of our `app-product-list` directive into our `AppRootComponent`
4. Add a menu to navigate through Home and Product List pages using the directive `[routerLink]` directive
5. Add to the `ProductDetailComponent` two link:
  - One to go back to `/products` route
  - an other to go to the next product detail page

**FROM THIS POINT IT NEEDS TO BE UPDATED!**

## 11 - Navigating and Routing Advanced

*Working based on 10 source code*

1. Read `id` parameter from url in `ProductDetailComponent` using `ActivatedRoute`
2. Develop a method `getProductById(id:number)` in our `ProductService`
2. Develop the `ProductDetailComponent` to display real product detail information by retrieving the product from our `ProductService`
3. Implement a Guard to check the validity of given `id`

## 12 - Forms

*Working based on 11 source code*

1. Create a new component called `ProductEditComponent` with a basic edit form of a product
2. Use `template driven form`
    1. Use `[(ngModel)]` on each input to create a two-way binding
    2. Add the hash operator to retrieve the current `ngModel` state (eg. `#nameInput`)
    3. Display an error box below based on `nameInput.valid`
    4. Implement a `(ngSubmit)` method to execute a function when user submit
3. Use `model driven form`
    1. Update the form to use `[ngFormModel]=formName` on the `<form>` DOM node
    2. Changes all `[(ngModel)]` into a `ngControl="inputName"`
    3. Import `ReactiveFormsModule` in your current angular module
    4. Import `FormBuilder` and `Validators` from `@angular/forms` into your component
    5. Inject into the component the `FormBuilder`
    6. Create a public `formName` variable by using `FormBuilder`
    7. Describe your forms using: `ControlGroup`
    8. Add some validators (custom?)

## 13 - Angular Modules

*Working based on 12 source code*

Following slides:

1. Create a Feature module called `ProductModule`
2. Create a Shared module called `SharedModule`
3. Refactor `AppModule` if necessary
4. Create a `ProductRoutingModule` and a `AppRoutingModule` to split down routing configuration
5. Optional: Create a `CoreComponent` to handle all services once in your application

## 14 - Angular 2 set-up revisited

No challenge here!

## 15 - Unit Testing w/ Jasmine & Karma

*Working based on 13 source code*

## 16 - Reactive Programming

No challenge here!

## 17 - Data Store with @ngrx/store

*Working based on 15 source code*

</details>
