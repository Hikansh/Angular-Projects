import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path:'',
    component:UsersComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
