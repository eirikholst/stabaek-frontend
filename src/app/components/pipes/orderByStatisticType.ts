import { Pipe, PipeTransform } from '@angular/core';
import {Fixture} from '../../domain/fixture';
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";
import {PlayerStatistic} from "../../domain/playerStatistic";
import {StatisticType} from "../stats/statisticType";

@Pipe({
  name: "orderByStatisticType"
})
export class OrderByStatisticType implements PipeTransform {
  transform(array: PlayerStatistic[], statisticType : StatisticType): PlayerStatistic[] {
        if (isBlank(array)) return null;
        switch (statisticType){
          case StatisticType.Goals:
            array.sort((a, b) => {
              if (a.goals > b.goals) {
                return -1;
              } else if (a.goals < b.goals) {
                return 1;
              } else {
                return 0;
              }
            });
            break;

          case StatisticType.Assists:
              array.sort((a, b) => {
                if (a.assists > b.assists) {
                  return -1;
                } else if (a.assists < b.assists) {
                  return 1;
                } else {
                  return 0;
                }
              });
            break;

          case StatisticType.RedCards:
            array.sort((a, b) => {
              if (a.redCards > b.redCards) {
                return -1;
              } else if (a.redCards < b.redCards) {
                return 1;
              } else {
                return 0;
              }
            });
            break;

          case StatisticType.YellowCards:
            array.sort((a, b) => {
              if (a.yellowCards > b.yellowCards) {
                return -1;
              } else if (a.yellowCards < b.yellowCards) {
                return 1;
              } else {
                return 0;
              }
            });
            break;

        }
    return array;
  }
}
