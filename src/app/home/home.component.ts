import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  ngOnInit() {
    console.log('in home component called only once');
  }
  ngOnDestroy(): void {
    console.log('home destroy called');
    console.log('component is removed from DOM');
  }
}
