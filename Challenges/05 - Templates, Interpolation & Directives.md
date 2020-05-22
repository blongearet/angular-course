# 05 - Templates, Interpolation & Directives

*Start from [step-04 branch](https://github.com/blongearet/angular-course-app/tree/step-04)*

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

4. Take care of our fabulous images
    1. Add a button to show/hide all images on the page (by using `(click)="toggleImage()"` for example)
    2. Use `*ngIf` to show/hide the image column in the table, depending on the `showImages`variable created before
    3. Link with a property variable (`[src]`) the image src attribute

5. Implement a search field to filter products shown in the table. To bind an input with a variable you should do:

    1. Add the `FormModule` to your `AppModule` by import `FormModule` from `@angular/forms`
    2. Bind the value from the ProductListComponent (like `searchTerm`) to the input field by using `ngModel` directive

`<input [(ngModel)]="searchTerm" type="text />`

**SOLUTION:** :octocat: step-05 branch (awaiting demo 🚀)

6. Go further

    1. Do a zoom by click on an image!
    2. Allow a product to have multiple images and display them as a caroussel with navigation buttons

**SOLUTION "GO FURTHER":** :octocat: step-05-more branch (awaiting demo 🚀)