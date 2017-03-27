import {Pipe, PipeTransform} from "@angular/core";
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";
import {Fixture} from "../../domain/fixture";

@Pipe({
  name: "addReadableDateToFixture"
})

export class AddReadableDateToFixture implements PipeTransform{
  transform(array: Fixture[], args: any): Fixture[] {
    if(isBlank(array)) return null;
    for(let fixture of array){
      let date = new Date(fixture.date);
      fixture.readableDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }
    return array;
  }

}
