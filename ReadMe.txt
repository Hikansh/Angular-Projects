 Requirements:- nodejs and angular cli with a code editor(Used VS code with integrated bash)
install node,angular latest versions of both.

Create new Angular App-> ng new appname
OR ng new appname --routing

Serve the App-> ng serve


Creating New Components(generally in seaparate folder)-> ng g component foldername/componentname eg-> components/user will generate user named component in the componenets folder.
Adding components to the main app.component.html-> create new selector tags with the selector name of that component eg-> <app-User></app-User>

Creating Services-> ng g service foldername/servicename eg-> ng g service services/data
Remember to import the services in app.module.ts(components are automatically imported but not services)
Whenever we want to use a service in any module/component we need to inject it in the constructor parameters of that component

Routing Basics:
first of all we need to import RouterModule in app.module.ts,
then we need to include the <router-outlet> tag in app.component.html
next we create a const in app.module to mention all the routes eg-> cont appRoutes:Routes=[
{path:'',component:specify component to be used here for homepage},
{.....any other path and component}]
last thing to do is in imports section write: RouterModule.forRoot(appRoutes);

linking the pages: <a routerLink='/'>home</a>

Interpolation:sending data from component.ts to .html file like sending a variable and using it in template eg-> {{variable}}

Property binding: setting values of tags eg->1. value="{{var}}" or 2. [value]="var"

Two way data binding: simultaneous data binding bw both the modules eg-> [(ngModel)]="var"

Services: help in sharing data bw multiple components.any method/var made in the service is accessible to whereve component we import it into.