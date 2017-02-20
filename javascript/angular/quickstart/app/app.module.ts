import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AnotherComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
