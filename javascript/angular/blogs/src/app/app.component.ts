import { Component } from '@angular/core';
import { TitleService } from './shared/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: TitleService) { }
}
