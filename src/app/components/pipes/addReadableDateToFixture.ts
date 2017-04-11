import {Pipe, PipeTransform} from "@angular/core";
import {Fixture} from "../../domain/fixture";

@Pipe({
  name: "addReadableDateToFixture"
})

export class AddReadableDateToFixture implements PipeTransform{
  transform(array: Fixture[], args: any): Fixture[] {
    if(array == null || array.length == 0) return null;
    for(let fixture of array){
      let date = new Date(fixture.date);
      fixture.readableDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }
    return array;
  }

}
