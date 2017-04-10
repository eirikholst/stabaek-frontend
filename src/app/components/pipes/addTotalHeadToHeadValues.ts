import {Pipe, PipeTransform} from "@angular/core";
import {Team} from "../../domain/team";

@Pipe({
  name: "addTotalHeadToHeadValues"
})
export class AddTotalHeadToHeadValues implements PipeTransform {
  transform(array: Team[]): Team[] {
    for(let team of array){
      team.wonTotal = team.wonHome + team.wonAway;
      team.drawnTotal = team.drawnHome + team.drawnAway;
      team.lostTotal = team.lostHome + team.lostAway;
      team.goalsForTotal = team.goalsForHome + team.goalsForAway;
      team.goalsAgainstTotal = team.goalsAgainstHome + team.goalsAgainstAway;
    }
    return array;
  }

}
