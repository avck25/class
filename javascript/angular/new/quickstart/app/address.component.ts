import { Component, Input } from '@angular/core';
import { Address } from './address';

@Component({
    selector: 'app-address',
    template: `<ul>
              <li>Street: {{address.street}}</li>
              <li>City: {{address.city}}</li>
              <li>State: {{address.state}}</li>
              <li>Zip: {{address.zip}}</li>
            </ul>`,
    styles: []
})
export class AddressComponent {
    @Input()
    address: Address;
}
