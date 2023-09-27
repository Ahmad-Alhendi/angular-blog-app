import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { BlogRoutingModule } from './blog-routing.module';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { SlideMenuModule } from 'primeng/slidemenu';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    UserListComponent,
    UserDetailComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BlogRoutingModule,
    DropdownModule,
    TagModule,
    MultiSelectModule,
    TableModule,
    FormsModule,
    ProgressBarModule,
    SliderModule,
    BrowserAnimationsModule,
    MenuModule,
    ToastModule,
    ToolbarModule,
    TooltipModule,
    SlideMenuModule,
    ButtonModule,
    DialogModule
    ]
  
})
export class BlogModule { }