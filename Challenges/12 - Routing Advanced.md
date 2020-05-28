# 12 - Routing Advanced
  
*Start from [step-11 branch](https://github.com/blongearet/angular-course-app/tree/step-11)*
  
1. Retrieve the `id` parameter from url in `ProductDetailComponent` using the Angular Service `ActivatedRoute`

    It is based on that [slide](https://docs.google.com/presentation/d/1DVvQNV51gI9GVqL22PNTqEtUmnbHRHT64YrSJYymVdY/edit#slide=id.g3b9169bdfa_0_151)
    
    1.1 Inject into the constructor the `ActivatedRoute` and the `ProductService`
    
    ```ts
    constructor(public productService: ProductService, public route: ActivatedRoute) {
       // ...
    }
    ```
    
    1.2 Build a local variable `currentId$` which is an `Observable<number>` from the router `paramMap` source
    
    ```ts
    constructor(public productService: ProductService, public route: ActivatedRoute) {
       let currentId$ = route.paramMap.pipe(
            map((param: ParamMap) => param.get('id')), // Retrieve the param with key 'id'
            filter((id?: string) => id !== null), // Filter to not getting null value
            map((id: string) => Number(id)) // Cast the param (string) into a number
       )
    }
    ```
    
    1.3 Build a public property on the class `product$` which is an `Observable<Product>`
    
    ```ts
    public product$: Observable<Product>
    
    constructor(public productService: ProductService, public route: ActivatedRoute) {
       let currentId$ = route.paramMap.pipe(
            map((param: ParamMap) => param.get('id')), // Retrieve the param with key 'id'
            filter((id?: string) => id !== null), // Filter to not getting null value
            map((id: string) => Number(id)) // Cast the param (string) into a number
       )
   
       this.product$ = currentId$.pipe(
           switchMap((id: number) => productService.getProductById(id)) // productService.getProductById doesn't exists, we'll create it next
       )
    }
    ```
   
   > switchMap is an RxJS operator and act like the map operator, but instead of returns primitive & sync value, can return a new observable.
   
2. Develop a method `getProductById(id: number)` in `ProductService`

    The idea is to retrieve the product from the single source of thruth that we created ... our BehaviorSubject
    
    2.1. Create the method
    
    ```ts
    public getProductById(id: number): Observable<Product> {
       //...
    }
    ```
   
    2.2. Filter the products$ source to get your product id
    
    ```ts
    public getProductById(id: number): Observable<Product> {
       return this.products$.pipe(
           filter(products => products.find(product => product.id === id))
       )
    }
    ```
   
   > For sure we can go further: manage when product doesn't exists, force a fetch to get fresh data, etc.

3. Develop the `ProductDetailComponent` to display real product detail information by retrieving the product from our `ProductService`

    Be totally free to display the HTML that you want!
    
    The only things important is to consume the `product$` property properly using the `| async`
    
    ```html
    <div *ngIf="product$ | async as product">
       <!-- HTML you want -->
    </div>
    ``` 
    
    > You can use else to display a template in case or there is no product

4. Implement a Guard to check the validity of given `id`

    We didn't see a lot Guards, so please find the [Angular doc link](https://angular.io/guide/router#milestone-5-route-guards)
    
    4.1. Generate the guard to prevent from a bad id (non-numeric for example)
    
    ```bash
    ng g guard shared/guard/id-is-valid-id
    ```
   
    4.2 Write a simple guard to check if id is a valid number
    
    ```ts
    export class IdIsValidIdGuard implements CanActivate {
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const id = Number(next.paramMap.get('id'));
            
        if (!isNaN(id) && id > 0) {
          return true
        } else {
          this.router.navigateByUrl('/products')
          return false
        }
      }
      
    }
    ```
   
   > Guard use Snapshot version of routes. It means that we don't have Observable to listen as source and we can use plain values

5. Let's start an Authentication guard

    1. Create `LoginComponent` & `AuthService` in a `auth` folder (next to `products`)
    2. Design a simple button into `LoginComponent` which will set a variable `isLogged` to `true` in the `AuthService`
    3. Create route for the login part
    4. Create two `CanActivate`  guards to check if the current user is logged or not
    5. Set guard on the route to protect them

**SOLUTION:** :octocat: [step-11 branch](https://github.com/blongearet/angular-course-app/pull/8)
