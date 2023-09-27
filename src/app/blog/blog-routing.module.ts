import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { BlogKeys } from './routing keys/blog-routing-keys';
import { PostListComponent } from './components/post-list/post-list.component';
const routes: Routes = [
  {path:"",pathMatch:"full", redirectTo:BlogKeys.Users},
  { path: BlogKeys.Users, component: UserListComponent },
  { path: BlogKeys.Posts, component: PostListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
