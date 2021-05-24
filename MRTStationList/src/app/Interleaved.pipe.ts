import { Pipe,PipeTransform } from '@angular/core';

@Pipe({name : 'interleaved'})
export class InterleavedPipe implements PipeTransform{
  transform(value:number):number{
    var input = Number(value)
    return input % 2 == 0 ? (input / 2) * -1 : -((input - 1) / 2) + input
  }
}
