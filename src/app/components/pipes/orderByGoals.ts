import { Pipe, PipeTransform } from '@angular/core';
import {Fixture} from '../../domain/fixture';
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";
import {PlayerStatistic} from "../../domain/playerStatistic";

@Pipe({
  name: "orderByGoals"
})
export class OrderByGoals implements PipeTransform {
  transform(array: PlayerStatistic[], args: any): PlayerStatistic[] {
    if (isBlank(array)) return null;
    array.sort((a, b) => {
      if (a.goals > b.goals) {
        return -1;
      } else if (a.goals < b.goals) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
