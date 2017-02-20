import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './person.component';
import { AddressComponent } from './address.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PersonComponent, AddressComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
