import { Component } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-app',
  template: `<app-person [person]="person"></app-person><input type="color"/>`,
  styles: ['input[type=color] { border: 5px solid green }']
})
export class AppComponent {
  person: Person = {
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'dtrump@whitehouse.gov',
    address: {
      street: '123 Park Ave',
      city: 'NY',
      state: 'NY',
      zip: '11230'
    }
  };

  constructor() {
    const that = this;
    let counter = 0;
    setInterval(function () {
      // that.person.firstName = (++counter) + that.person.firstName;
      that.person = Object.assign({}, that.person, { firstName: (++counter) + that.person.firstName });
    }, 1000);
  }
}
