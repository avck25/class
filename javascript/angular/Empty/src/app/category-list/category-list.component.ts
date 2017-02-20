import { Component, Input } from '@angular/core';
import { Category } from '../shared/category';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input()
  categories: Category[];

  selectedCategory: Category;

  constructor() { }

  categorySelected(index: number) {
    if (index >= 0) {
      this.selectedCategory = this.categories[index];
    } else {
      this.selectedCategory = null;
    }
  }
}
