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
   <form [formGroup]="productForm"
    ```

6. Then connect each input to the FormControl using the key like `<input formControlName="productName" ...>`

    ```html
   <input type="text" formControlName="productName" />
   <!-- More inputs -->
    ```
   
7. You can display some error boxes based on status of FormControl / FormGroup
8. Design a `<button type="submit">Submit</button>` to submit the form and catch the ngOnSubmit event (as in 1.4)
9. In the called method, you should check if the form is valid and then you can call a method `save()` on your ProductService 
10. Design the `ProductService.save(payload: IProduct)` method to make a PUT request to the server

**SOLUTION:** :octocat: step-12 branch (awaiting demo)
