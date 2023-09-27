import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ]
  
})
export class BlogModule { }