# 10 - Navigation and Routing Basics

*Start from [step-10 branch](https://github.com/blongearet/angular-course-app/tree/step-10)*

**ℹ We'll work on the created components `ProductDetailComponent` and `WelcomeComponent`. Generate them if not already exists**

1. *ONLY IF YOU GENERATED ANGULAR APP WITHOUT ROUTING* 

    1. Install as a dependency `@angular/router`
    2. Create a `AppRoutingModule` next to your `AppModule`
    3. Import the `RouterModule.forRoot(routes)` and export the `RouterModule` (as you can see on slides)
    4. `routes` is a variable where we'll set route definitions
    5. Import your `AppRoutingModule` into you `AppModule`
 
2. Set the value of `routes` into your `AppRoutingModule` (it's a `Route[]` or a `Routes` type)

    2.1. Define the welcome page route
    
    ```ts
   { path: 'welcome', 'component': WelcomeComponent}
    ```
    
    2.2. Define a product page as a parent of all product pages which will used by the `/products` route. You have to create a new component called `ProductComponent` which will be the parent of all product's related pages.
    
    2.1.1 Create the `ProductComponent`
    
    ```bash
    ng generate component product/product --inline-style --inline-template --flat=true
    ```
   
    This component will only contains a inlined template `<router-outlet></router-outlet>` in order to wrap all product-related stuff.
    
    2.1.2 Define the route `/products`
    
    ```ts
    { path: 'products', 'component': ProductComponent, children: []}
    ```
    
    2.3. Define all products children routes
    
    - Product List page: '/products'
    - Product Detail page: '/products/:id'
    - Product Edit page: '/products/:id/edit'
    
    ```ts
    children: [
       { path: '', 'component': ProductListComponent },
       { path: ':id', 'component': ProductEditComponent },
       { path: ':id/edit', 'component': ProductEditComponent }
    ]
    ```
   
3. Add the `<router-outlet></router-outlet>` instead of our `<app-product-list></app-product-list>` directive into our `AppComponent` template as inn the `ProductComponent` template

4. Update the menu
 
    4.1 Replace the default `href` property into our `HeaderComponent` template to use `routerLink` directive
    
    ```html
    <div>
        <a routerLink="/welcome">Welcome</a> -
        <a routerLink="/products">Products</a>
    </div>
    ```
   
   4.2 Use the `routerLinkActive` onto these links to add a css class & a related css style definition
    
     
    ```html
    <div>
        <a routerLink="/welcome" routerLinkActivate="activated">Welcome</a> -
        <a routerLink="/products" routerLinkActivate="activated">Products</a>
    </div>
    ```

5. Add to the `ProductDetailComponent` two links:
  - One to go back to `/products` route
  - an other to go to the next product detail page
  
**SOLUTION:** :octocat: step-10 branch (awaiting demo)
