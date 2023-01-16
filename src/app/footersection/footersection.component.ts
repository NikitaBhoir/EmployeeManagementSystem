import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-footersection',
  templateUrl: './footersection.component.html',
  styleUrls: ['./footersection.component.css'],
})
export class FootersectionComponent implements OnChanges, DoCheck {
  gp = '';

  @Input()
  globalArray: string[] = [];

  @Input()
  locFromParent: string = '';
  length = this.globalArray.length;
  ngOnInit() {
    console.log('called once after constructor/ after ngOnChanges');
    this.length = this.globalArray.length;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  ngDoCheck() {
    console.log('do check called');
    console.log(this.globalArray.length);
    if (this.length < this.globalArray.length) console.log('Array changed');
  }
}
