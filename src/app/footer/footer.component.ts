import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  myLocation = 'INDIA';
  globalPresence = ['india', 'asia pacific', 'middle east'];
}
