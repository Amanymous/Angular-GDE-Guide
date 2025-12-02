import { Component } from '@angular/core';

@Component({
  selector: 'app-interview1',
  imports: [],
  templateUrl: './interview1.html',
  styleUrl: './interview1.css',
})
export class Interview1 {
  // 1) What is Angular and why do we use it?
  // Angular is a TypeScript-based front-end framework used to build Single Page Applications (SPAs).
  // It provides powerful features such as data binding, dependency injection (DI), routing,
  // reusable components, and HTTP communication.
  // Angular helps structure applications using architecture patterns like MVC, MVVM, or Component-based design.
  // 2) Difference between AngularJS and Angular
  // AngularJS (v1.x):
  // - Uses JavaScript
  // - Controller-based architecture
  // - No CLI, no TypeScript, no lazy loading
  // - Limited mobile support
  //
  // Angular (v2+):
  // - Uses TypeScript
  // - Component-based architecture
  // - Supports CLI, lazy loading, SSR, and better mobile support (via Ionic)
  // - Faster, modular, and scalable.
  // 3) What are directives in Angular?
  // Directives let you attach behavior to DOM elements.
  // Examples:
  //   <input [(ngModel)]="value">
  //   <div>{{ value }}</div>
  //   <div [hidden]="isHidden()">Hello</div>
  // ngModel, hidden, and property bindings are all directives.
  // 4) Types of Angular directives
  // Angular has 3 types of directives:
  //
  // 1) Structural Directives → Change the DOM structure.
  //    Examples: *ngFor, *ngIf, *ngSwitch
  //    <tr *ngFor="let item of sales">
  //       <td>{{ item.name }}</td>
  //    </tr>
  //
  // 2) Attribute Directives → Change the appearance or behavior of elements.
  //    Example: [hidden], [ngClass], [ngStyle]
  //    <div [hidden]="isHidden()">Hello</div>
  //
  // 3) Component Directives → Directives with templates.
  //    Every Angular component is a directive with an HTML template.
  // 5) Importance of NPM and node_modules
  // NPM (Node Package Manager) manages JavaScript libraries and frameworks.
  // node_modules is the folder where all installed packages and their dependencies are stored.
  // 6) Importance of package.json
  // package.json contains metadata and a list of dependencies required for the project.
  // Instead of installing packages one-by-one, running `npm install` installs all dependencies listed here.
  // 7) What is TypeScript and why do we need it?
  // TypeScript is a superset of JavaScript that adds static typing and OOP features.
  // Angular uses TypeScript because it improves development, reduces bugs, and compiles down to JavaScript.
  // 8) Importance of Angular CLI
  // Angular CLI provides commands to generate components, services, modules, and build angular apps.
  // Example: npm install -g @angular/cli , ng new myApp
  // It automates project setup and enforces best practices.
  // 9) Importance of Components and Modules
  // Components → Define UI and logic (HTML + TS).
  // Modules → Group components, directives, pipes, and services.
  // Modules organize the app into functional blocks.
  // 10) What is a decorator in Angular?
  // A decorator tells Angular what type of class it is.
  // @Component → Marks a class as an Angular component.
  // @NgModule → Marks a class as an Angular module.
  // 11) What are Annotation and Metadata?
  // @Component → Decorator
  // { selector, template } → Metadata
  // Note: Modern Angular uses decorators, not "annotations".
  // 12) What is a Template?
  // Template = HTML view of a component, containing bindings and directives.
  // Templates can be inline or stored in an external HTML file.
  // 13) Four types of data binding in Angular
  // 1) Interpolation:        {{ value }}
  // 2) Property binding:     [prop]="value"
  // 3) Event binding:         (click)="submit()"
  // 4) Two-way binding:      [(ngModel)]="value"
  // 14) Explain Angular architecture
  // - Component: Contains logic and template
  // - Template: HTML view
  // - Module: Groups components
  // - Data Binding: Connects view and component
  // - Directives: Add behavior to DOM
  // - Services: Contain business logic
  // - DI: Makes services available in components
  // 15) What is SPA?
  // SPA (Single Page Application) loads the main UI once.
  // Only required parts of the UI load dynamically without reloading the whole page.
  // 16) Purpose of Routing, router-outlet, routerLink, and navigate
  // Routing loads components based on the URL.
  //
  // Example Routes:
  // const routes = [
  //   { path: 'home', component: HomeComponent },
  //   { path: 'about', component: AboutComponent }
  // ];
  //
  // routerLink → Navigation in templates
  // <a routerLink="/home">Home</a>
  //
  // router-outlet → Placeholder where routed component loads
  // <router-outlet></router-outlet>
  //
  // navigate() → Programmatic navigation
  // this.router.navigate(['/dashboard']);
  // 18) What is Lazy Loading?
  // Lazy loading loads modules/components only when needed.
  // This improves performance.
  //
  // Example:
  // {
  //   path: 'about',
  //   loadComponent: () =>
  //     import('./about/about.component').then(m => m.AboutComponent),
  // }
  // 19) What is Dependency Injection (DI)?
  // DI is a design pattern where Angular provides required services automatically,
  // instead of creating them manually inside components.
  // 20) How do we implement DI?
  // @Injectable({
  //   providedIn: 'root'
  // })
  // export class UserService {}
  //
  // constructor(private userService: UserService) {}
  // 21) Benefits of DI
  // - Reduces tight coupling
  // - Makes code flexible and testable
  // - Easy to switch implementations
  //
  // Example:
  // { provide: LoggerService, useClass: FancyLoggerService }
  //
  // Other methods: useClass, useExisting, useFactory.
  // 22) What does `ng build --prod` do?
  // - Minifies and optimizes JS
  // - Removes comments
  // - Generates hashed filenames
  // - Produces a smaller, faster production-ready build
  // 23) How an angular app gets loaded and started?What are index.html,app-root,selector and main.ts?
  //   graph TD
  //     A[Browser loads index.html] --> B{index.html contains <app-root>}
  //     B --> C[main.ts executes]
  //     C --> D{main.ts bootstraps root component/module}
  //     D --> E[Angular processes root component (e.g., AppComponent)]
  //     E --> F[Angular identifies app-root selector]
  //     F --> G[Angular replaces <app-root> in index.html with component's template]
  //     G --> H[Browser renders Angular application]
  //
  // 24) What is a bootstrapped Module & bootstrapped component?
  // This approach simplifies the bootstrapping process by eliminating the need for a root
  // NgModule for applications built with standalone components, making the application
  //  setup more concise and modular.
  // 25)What are pipes?What are the types of pipes & parameterized pipes?
  // pipes are simple function which accepts an input value and return transformed value.
  // Built-in pipes:lowercase,uppercase,data,percentage,currency,decimal,slice,json
  // When pass any parameters to the pipes it is called parametrized pipes.
  //   import { Pipe, PipeTransform } from '@angular/core';
  // @Pipe({
  //   name: 'multiply'
  // })
  // export class MultiplyPipe implements PipeTransform {
  //   transform(value: number, factor: number): number {
  //     return value * factor;
  //   }
  // }
  //   {{ 10 | multiply:3 }}    <!-- Output: 30 -->
  // {{ 5 | multiply:4 }}     <!-- Output: 20 -->
  // 26) What is chaining pipes?
  // Chaining pipes use multiple pipes on data input {{dob | data | uppercase}}
  // 27)What are lifecycle hooks in angular?
  // ngOnChanges – Runs when input properties change.
  // ngOnInit – Runs once after component initialization.
  // ngDoCheck – Runs on every change detection cycle.
  // ngAfterContentInit – Runs after projected content is initialized.
  // ngAfterContentChecked – Runs after projected content is checked.
  // ngAfterViewInit – Runs after component’s view is initialized.
  // ngAfterViewChecked – Runs after component’s view is checked.
  // ngOnDestroy – Runs just before the component is destroyed.
  // ngAfterContentInit,ngAfterContentChecked,ngAfterViewInit,ngAfterViewChecked called for component children
  // 28) What is a constructor in angular?
  // Constructor is a method in ts class that automatically get called when classis being instantiated.
  // constructor always run before any lifecycle hook and it is not a part of lifecycle hook
  // constructor is widely used to inject dependencies(services) into component class
}
