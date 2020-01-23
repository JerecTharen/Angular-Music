import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { FirstPageComponent } from './FirstPage.component';

@NgModule({
  declarations: [
    FirstPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [FirstPageModule],
  providers: [],
  bootstrap: [FirstPageComponent]
})
export class FirstPageModule { }
