# 10 - Retrieving data Using HTTP

*Start from [step-08 branch](https://github.com/blongearet/angular-course-app/tree/step-07)*

1. Set up the local server using the [`json-server`](https://github.com/typicode/json-server) module

    1.1. Install the package using npm ▶ `$ npm install --save-dev json-server`

    1.2. Create a npm script to easily run the server by adding `"api": "json-server --watch db.json"` into the scripts part of `package.json`. You will be able to run `npm run api`to launch the API.

    1.3. Create a `db.json` file at the root of the project with the following JSON
    
    ```json
    {
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
    
3. Use the data from the API

    3.1. Inject `HttpClient` into our `ProductService` with the name `http`

    ```ts
    constructor(private http: HttpClient) {}
    ```

    3.2. Create a fetch method to get data from the API (`http://localhost:3000/products`)

    3.2.1. Create a public `fetch` method that returns `void` in the `ProductService` and call it into the constructor

    3.2.2 Use the `HttpClient` method to get value from the API [link Angular](https://angular.io/tutorial/toh-pt6#get-heroes-with-httpclient)

    ```ts
    public fetch() {
        this.http.get<IProduct[]>('http://localhost:3000/products').subscribe()
    }
    ```

    3.2.3 Instanciate `IProduct[]` into a `Product[]`

    ```ts
    import { map } from 'rxjs/operators'

    //...

    public fetch() {
        this.http.get<IProduct[]>('http://localhost:3000/products').pipe(
            map(products => products.map(product => new Product(product)))
        ).subscribe()
    }
    ```

    > ⚠ map method for RxJS (observable) will iterate over all events

    > ⚠ map method for array will iterate over all items!

    3.3. Use `RxJS` methods to prepare and assign the data (`tap`, `catch`, etc.)

    ```ts
    import { map, tap } from 'rxjs/operators'

    //...

    public fetch() {
        this.http.get<IProduct[]>('http://localhost:3000/products').pipe(
            map(products => products.map(product => new Product(product))),
            tap(products => console.log(`Products (${product.length})`))
        ).subscribe()
    }
    ```

4. Consume Observable instead of flat array in our `ProductListComponent`

    4.1. We need a unique source of truth into our `ProductService`

    4.1.1. Create a private property `_products` into out `ProductService`
    
    4.1.2. This property is a `BehaviorSubject` [BehaviorSubjet vs Observable stackoverflow](https://stackoverflow.com/a/40231605)

    To summarize, a `BehaviorSubject` is an `Observable` with more capabilities like:

    - Send new event using the method `next(event)`
    - Have a default value

    ```ts
    import { Observable, BehaviorSubject } from 'rxjs';

    //...

    private _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
    ```
   
    4.1.3 Propagate the Product list to the BehaviorSubject each time we do a fetch
    
    ```ts
    public fetch() {
        this.http.get<IProduct[]>('http://localhost:3000/products').pipe(
            map(products => products.map(product => new Product(product))),
            tap(products => console.log(`Products (${product.length})`)),
            tap(products => this._products.next(products))
        ).subscribe()
    }
    ``` 
   
   or, similar code can be to send the new product list in the subscribe method.
    
    ```ts
    public fetch() {
        this.http.get<IProduct[]>('http://localhost:3000/products').pipe(
            map(products => products.map(product => new Product(product))),
            tap(products => console.log(`Products (${product.length})`))
        ).subscribe(
           products => this._products.next(products)
       )
    }
    ``` 

    4.2. Return an `Observable<Product[]>` instead of a `IProduct[]`
    
    4.2.1. Create a public property `products$` which is a Observable with the BehaviorSubject as a source
    
    ```ts
    import { Observable, BehaviorSubject } from 'rxjs';
    
    //...

    private _products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([])
    public products$: Observable<Product[]> = this._products.asObservable()
    ```
    
    4.2.2. Transform the method `getProducts(): Product[]` into a `getProducts$(): Observable<Product[]>`

    ```ts
    public getProducts$(): Observable<Product[]> {
       return this.products$
    }
    ```

    4.2.3. Consume this observable into the `ProductListComponent` using the `| async` pipe
    
    In order to avoid multiple call to the products observable, we can on a top HTML DOM element use the `*ngIf` directive.
    
    ```html
    <div *ngIf="products$ | async as products">
       <!-- Here your code can use products variable as a Product[] -->
    </div>
    ```
    
    4.2.3. To check if it works, you can add a button to refresh the data into any component of the application!
    
**SOLUTION:** :octocat: [step-10 branch](https://github.com/blongearet/angular-course-app/pull/6)

## Next step

The less you know, the more you know that you does not know 🙃
