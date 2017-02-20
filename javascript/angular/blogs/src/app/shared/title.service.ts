import { Injectable } from '@angular/core';

@Injectable()
export class TitleService {
  private title: string;

  constructor() { }

  setTitle(title: string) {
    this.title = title;
    console.log('title set to ', this.title);
  }

  getTitle() {
    return this.title;
  }
}
