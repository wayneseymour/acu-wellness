import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
    // TODO: Figure a way to not store the title as an array, but a string.
    title = ['Acupuncture and Functional Medicine', 'of Orlando and Winter Park']
}
