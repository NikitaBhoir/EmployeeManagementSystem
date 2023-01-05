import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'suffix',
})
export class SuffixPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '-' + args[0];
    //return null;
  }
}
