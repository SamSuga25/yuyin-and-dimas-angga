import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Header1Component } from './header1/header1.component';
import { Footer1Component } from './footer1/footer1.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Footer1Component
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
