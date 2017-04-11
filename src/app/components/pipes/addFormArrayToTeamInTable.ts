
import { Pipe, PipeTransform } from '@angular/core';
import {TeamInTable} from "../../domain/teamInTable";

@Pipe({
  name: "AadFormArrayToTeamInTable"
})
export class AddFormArrayToTeamInTable implements PipeTransform {
  transform(array: TeamInTable[], args: any): TeamInTable[] {
    if (array == null || array.length == 0) return null;
    for(let teamInTable of array){
      teamInTable.formArray = teamInTable.form.split(',');
    }
    return array;
  }
}
