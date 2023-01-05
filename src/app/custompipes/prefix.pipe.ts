import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix', // use this name for accessing pipe or to use this
})
export class PrefixPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return args[0] + '-' + value;
  }
}
