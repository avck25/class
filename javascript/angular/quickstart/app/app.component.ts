import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
            <app-another></app-another>`,
})
export class AppComponent { name = 'Angular'; }
