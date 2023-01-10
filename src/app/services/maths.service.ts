import { Injectable } from '@angular/core';
// created custom shared service
@Injectable({
  providedIn: 'root', // means every componant can use it becoz we define it at root level
})
export class MathsService {
  mathCounter = 0;
  constructor() {}
  mathAdd(...nums: number[]): number {
    // inbuilt method to make sum of array elements
    return nums.reduce((acc, num) => acc + num);
  }
  incrementCounter(): void {
    this.mathCounter++;
  }
  getCounter(): number {
    return this.mathCounter;
  }
}
