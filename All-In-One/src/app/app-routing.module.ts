import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentChildRelationshipComponent } from './components/parent-child-relationship/parent-child-relationship.component';
import { ChildComponent } from './components/child/child.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'parentchild',component:ParentChildRelationshipComponent},
  {path:'child',component:ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
