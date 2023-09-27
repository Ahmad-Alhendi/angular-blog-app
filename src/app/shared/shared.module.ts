import { NgModule } from '@angular/core';
import { SharedGridViewComponent } from './shared-grid-view/shared-grid-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SharedGridViewComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule
  ],
  exports: [
    SharedGridViewComponent,
  ]
})
export class SharedModule { }
