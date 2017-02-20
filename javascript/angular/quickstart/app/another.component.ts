import { Component } from '@angular/core';

@Component({
    selector: 'app-another',
    template: `<p>
                    That was {{difficulty}}
               </p>`
})
export class AnotherComponent {
    difficulty = 'not so easy';
}