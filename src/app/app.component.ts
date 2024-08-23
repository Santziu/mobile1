import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isPremiumClient = true;
  values = [
    { id: 1, name: 'Value 1', description: 'Description 1' },
    { id: 2, name: 'Value 2', description: 'Description 2' },
  ];
  name = '';

  addNewItem() {
    if (this.name) {
      this.values.push({ id: this.values.length + 1, name: this.name, description: '' });
      this.name = '';
    }
  }
}