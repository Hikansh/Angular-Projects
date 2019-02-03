import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { AuthGuard } from './guards/auth.guard';
import { TokeninterceptorService } from './services/tokeninterceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,EventService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
