import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperNavigationComponent } from './upper-navigation/upper-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
