/**
 * Created by eirik.holst on 17.03.2017.
 */
import { Pipe, PipeTransform } from '@angular/core';
import {Fixture} from '../../domain/fixture';
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";

@Pipe({
  name: "orderByDate"
})
export class OrderByDate implements PipeTransform {
  transform(array: Fixture[], args: any): Fixture[] {
    if (isBlank(array)) return null;
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
