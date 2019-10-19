import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exMarks'
})
export class ExMarksPipe implements PipeTransform {

  transform(str: any, ...args: any[]): string {
    console.log('args ', args)
    return `${str.trim()}!!!!`;
  }

}
