import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'multBy'
})
export class MultByPipe implements PipeTransform { // собственный pipe
    transform(number: number, pow: number = 2):number { 
        return number * pow
    }

}