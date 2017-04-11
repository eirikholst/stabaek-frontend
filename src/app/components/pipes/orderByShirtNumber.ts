import {PipeTransform, Pipe} from "@angular/core";
import {Player} from "../../domain/player";

@Pipe({
  name: "orderByShirtNumber"
})
export class OrderByShirtNumber implements PipeTransform {
  transform(array: Player[], args: any): Player[] {
    if (array == null || array.length == 0) return null;
    array.sort((a, b) => {
      if (a.number < b.number) {
        return -1;
      } else if (a.number > b.number) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
