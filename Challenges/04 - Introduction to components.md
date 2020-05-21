# 04 - Introduction to Components

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