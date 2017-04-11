import { Pipe, PipeTransform } from '@angular/core';
import {Fixture} from '../../domain/fixture';

@Pipe({
  name: "orderByDate"
})
export class OrderByDate implements PipeTransform {
  transform(array: Fixture[], args: any): Fixture[] {
    if(array == null || array.length == 0) return null;
    array.sort((a, b) => {
      if (a.date < b.date) {
        return -1;
      } else if (a.date > b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
@Pipe({
  name: "orderByDateDescending"
})
export class OrderByDateDescending implements PipeTransform {
  transform(array: Fixture[], args: any): Fixture[] {
    if (array == null || array.length == 0) return null;
    array.sort((a, b) => {
      if (a.date > b.date) {
        return -1;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
