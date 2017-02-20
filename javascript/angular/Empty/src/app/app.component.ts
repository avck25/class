import { Component } from '@angular/core';
import { Category } from './shared/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = [
    {
      name: 'MP3 Players', items: [
        { name: 'Apple Ipod', price: 99.99 }, { name: 'Sanasa Clip', price: 75.99 }
      ]
    },
    {
      name: 'Snack Food', items: [
        { name: 'Apple', price: 1.99 }, { name: 'Chips', price: .99 }
      ]
    },
    {
      name: 'Empty Category'
    },
    {
      name: 'Another Empty Category', items: []
    }
  ];
}
