import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {DataService} from './services/data.service';
import { AboutComponent } from './components/about/about.component';

//all the routes should be mentioned here
const appRoutes:Routes=[
  {path:'',component:UserComponent},
  {path:'about',component:AboutComponent}
]

@NgModule({
  declarations: [// all the components need to be listed here
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [// all the Modules need to be listed here
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [//all the services need to be listed here
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
