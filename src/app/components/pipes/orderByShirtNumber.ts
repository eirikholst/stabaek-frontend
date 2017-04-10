import {PipeTransform, Pipe} from "@angular/core";
import {Player} from "../../domain/player";
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";

@Pipe({
  name: "orderByShirtNumber"
})
export class OrderByShirtNumber implements PipeTransform {
  transform(array: Player[], args: any): Player[] {
    if (isBlank(array)) return null;
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
