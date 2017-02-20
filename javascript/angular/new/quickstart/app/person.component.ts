import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'app-person',
    template: `<ul>
              <li>Name: {{person.firstName}} {{person.lastName}}</li>
              <li>Email: {{person.email}}</li>
              <app-address [address]="person.address"></app-address>
            </ul>`,
    styles: ['ul { list-style-type: none; margin: 0; padding: 0 }']
})
export class PersonComponent {
    @Input()
    person: Person;
}
