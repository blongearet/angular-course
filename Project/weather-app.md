# Weather app readme

## 01 - Add external packages to easily work

### Use material package from @angular

[https://material.angular.io/](https://material.angular.io/) is a library to easily use material design into Angular applications.

```bash
ng add @angular/material

? Choose a prebuilt theme name, or "custom" for a custom theme: Indigo/Pink
? Set up global Angular Material typography styles? Yes
? Set up browser animations for Angular Material? Yes
```

### Use momentjs as date library

[Moment](https://momentjs.com/) is a useful library to work with date.

```bash
npm i --save moment
```

To use it in French, the doc say that you have to set local in your code.

Open and edit the `main.ts` and add the following line

```ts
import * as moment from 'moment';
moment.locale('fr')
```

### Use angular flex layout library

[angular/flex-layout](https://github.com/angular/flex-layout) is a library to easily use flexbox & Responsive API into angular.

Follow the [Getting Start](https://github.com/angular/flex-layout#getting-started) from the official repository.

1. Install dependencies

    ```bash
    npm i -save @angular/flex-layout @angular/cdk
    ```
   
2. Import `FlexLayoutModule` into our application

> `@angular/cdk` is already updated by `ng add @angular/material` but to be in idempotent I added it to the command to allow you working with this module without `@angular/material`

## 02 - Generate basic template

To setup easily our `AppComponent` let's add a toolbar and a basic `sidenav-content`.

```html
<nav>
  <mat-toolbar color="primary">
    <mat-toolbar-row>
      <span>Angular course weather app 😎</span>
    </mat-toolbar-row>
  </mat-toolbar>
</nav>

<mat-sidenav-container>
  <mat-sidenav-content>
    <router-outlet></router-outlet>
  </mat-sidenav-content>
</mat-sidenav-container>
```

> Don't forgot to import all the Angular Material component as needed.

## 03 - Create our first component 'weather'

We'll use this component as our container for the app.

1. Generate the new component 

```bash
ng generate component weather
```

2. Add it as the default route into `app-routing.module.ts` file

```ts
const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
```

3. Use basic layout

We'll take benefits from `mat-grid-list` component ([documentation](https://material.angular.io/components/grid-list/overview)) in order to easily five a position to each element.

The grid will take 8 columns and 4 rows (cf google weather widget by typing `meteo` in the search bar).

## 04 - Create a Weather class

This class will take care of all needed information for display location-related weather.

1. We'll first type the response from openweathermap

1.1 Create the typings file

```bash
ng generate interface shared/model/openweathermap.ts
```

1.2 Read the API doc to type what you want to type

[https://openweathermap.org/api/one-call-api](https://openweathermap.org/api/one-call-api)

2. We'll design our Weather class to get the raw response, and easily expose data that we want for the UI.

## 05 - prepare our apikey form openweathermap

1. Create an account and get an api key

2. Update your environment file into angular `src/environments` to copy/paste your api key

## 06 - create a weather service

1. Create the file

```bash
ng generate service shared/model/weather
```

2. Bootstrap the `BehaviorSubject` pattern into `WeatherService`

This service will manage only one Weather.

3. Write method to fetch data from openweathermap

## 07 - Consume data into our component

I decided to create an observable per block in my UI to easily prepare and use them.

I started with the three first blocks:
- Title
- Temperatures
- Stats

1. Create these three observable plugged on the same source: our `WeatherService` method

2. Use `*ngIf` into our component to use these asynchronous observable and display information
