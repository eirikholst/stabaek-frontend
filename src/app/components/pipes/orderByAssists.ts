import { Pipe, PipeTransform } from '@angular/core';
import {Fixture} from '../../domain/fixture';
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";
import {PlayerStatistic} from "../../domain/playerStatistic";

@Pipe({
  name: "orderByAssists"
})
export class OrderByAssists implements PipeTransform {
  transform(array: PlayerStatistic[], args: any): PlayerStatistic[] {
    if (isBlank(array)) return null;
    array.sort((a, b) => {
      if (a.assists > b.assists) {
        return -1;
      } else if (a.assists < b.assists) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
