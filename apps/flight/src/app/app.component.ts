import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'rydoo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flight';
  constructor() {
    console.log(environment);
  }
}
