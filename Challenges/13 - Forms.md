# 13 - Forms

*Start from [step-12 branch](https://github.com/blongearet/angular-course-app/tree/step-12)*

**ℹ We'll work on the created components `ProductEditComponent`. Generate them if not already exists.**

### Reactive forms
    
Easiest and future-proof way is to use Reactive forms.

1. Import the `ReactiveFormsModule` into our `AppModule`

    ```ts
    import {FormsModule, ReactiveFormsModule} from '@angular/forms';
    
    //...
    
    @NgModule({
        imports: [
            // Other imports
            ReactiveFormsModule
        ]
        // Other properties
    })
    export class AppModule { }
    ```

2. Inject the `FormBuilder` service into our `ProductEditComponent` to easily design our FormGroup/FormControl

    ```ts
   import {FormBuilder} from '@angular/forms';
   
   //...
   
   @Component({ /* ... */ })
   class ProductEditComponent {
       constructor(fb: FormBuilder) { }
   } 
   ```

3. Create a property `productForm`

    ```ts
   import {FormBuilder, FormGroup} from '@angular/forms';
      
    //...
    
    @Component({ /* ... */ })
    class ProductEditComponent {
       public productForm: FormGroup
    } 
    ```
    
4. Assign your FormGroup to declare all the fields, and use some `Validators` to check values

   ```ts
   import {FormBuilder, FormGroup, Validators} from '@angular/forms';
   
   const HTTP_URL_PATTERN: string =
     '^((http[s]?):\\/)\\/?([^:\\/\\s]+)((\\/\\w+)*)([\\w\\-\\.]+[^#?\\s]+)(.*)?(#[\\w\\-]+)?$'
   
   //...
   
   @Component({ /* ... */ })
   class ProductEditComponent {
       constructor(fb: FormBuilder) {
           this.productForm = fb.group({
                id: [null],
                productName: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(80)]],
                productCode: [''],
                releaseDate: [new Date()],
                description: [''],
                price: [0, Validators.min(0)],
                starRating: [0, [Validators.min(0), Validators.max(5)]],
                imageUrl: ['', Validators.pattern(HTTP_URL_PATTERN)]
           })    
       }
   }
   ```
 
5. Once your `FormGroup` is designed, connect it to the `<form ...>`

    ```html
    <form [formGroup]="productForm">
       <!-- ... -->
    </form>
    ```

6. Then connect each input to the FormControl using the key like `<input formControlName="productName" ...>`

    ```html
   <input id="productName" type="text" formControlName="productName" />
   <!-- More inputs -->
    ```
   
7. You can display some error boxes based on status of FormControl / FormGroup

    7.1. Display error next to the field to help user put valid data
    
    ```html
    <div *ngIf="productName.invalid && (productName.dirty || productName.touched)">
       <div *ngIf="productName.errors.required">
           Product name is required
       </div>
    </div>
    ```
   
   7.2. As angular set css classes to form & inputs update your CSS rules to help user

8. Submit your form!

    8.1. Add a submit button in your form
    
    ```html
    <button type="submit">Save!</button>
    ```
   
    8.2. Listen the submit event and execute a onSubmit method
   
    ```html
    <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
       <!-- ... -->
    </form>
    ```
   
   8.3. Disable the submit button while form is not valid
   
   ```html
    <button type="submit" [disabled]="productForm.invalid">Save!</button>
   ```

9. Save the data!

    Before save the data, you need to be sure that you form is valid.
    
    We disable the submit button, but by hitting "enter" it can also submit the form.
    
    9.1. Check if form is valid into the onSubmit method
    
    ```ts
    @Component({ /* ... */ })
    class ProductEditComponent {
       //...
       public onSubmit() {
           if (this.productForm.valid) {
               let data = this.productForm.value
               // Save the data
           }       
       }
    }
    ```
   
   9.2. Call a ProductService.save method
   
   9.2.1. Inject the ProductService into the ProductEditComponent
   
    ```ts
    @Component({ /* ... */ })
    class ProductEditComponent {
       constructor(fb: FormBuilder, public productService: ProductService)
    }
    ```
   
   9.2.2. Call the save method from ProductService
   
    ```ts
    @Component({ /* ... */ })
    class ProductEditComponent {
       //...
       public onSubmit() {
           if (this.productForm.valid) {
               let data = this.productForm.value
               this.productService.save(data)
           }       
       }
    }
    ```

10. Design the `ProductService.save(payload: IProduct)` method

    The objective of this method is to save the payload to the server.
    
    In order to perform HTTP POST & PUT, the server can ask for custom headers. Here the `httpOptions` carry them.
    
    ```ts
    export class ProductService {
        public httpOptions = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }
    
        public save(product: IProduct): Observable<IProduct> {
            if(product.id === null) { // Create a product
                return this.http.post<IProduct>('http://localhost:3000/products', product, this.httpOptions).pipe(
                    tap(product => console.log(`New product: ${product.id}`))
                )
            } else { // Update a product
                return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, data, this.httpOptions).pipe(
                    tap(product => console.log(`Edit product: ${product.id}`))
                )
            }
        }
    }
    ```

**SOLUTION:** :octocat: step-12 branch (awaiting demo)
