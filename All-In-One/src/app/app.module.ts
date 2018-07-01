import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ParentChildRelationshipComponent } from './components/parent-child-relationship/parent-child-relationship.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentChildRelationshipComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }