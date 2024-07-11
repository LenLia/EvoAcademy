import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "additonPipe"
})
export class AdditonPipePipe implements PipeTransform {

  transform(value: number, args?: number): number {
   return value+5;
  }
}
