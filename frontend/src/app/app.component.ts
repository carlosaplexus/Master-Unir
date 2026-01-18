import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemsComponent],
  template: `<app-items></app-items>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}

