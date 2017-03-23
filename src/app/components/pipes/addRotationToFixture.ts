
import { Pipe, PipeTransform } from '@angular/core';
import {Fixture} from '../../domain/fixture';
import {isBlank} from "@angular/platform-browser-dynamic/src/facade/lang";

@Pipe({
  name: "addRotationToFixture"
})
export class AddRotationToFixture implements PipeTransform {
  transform(array: Fixture[], args: any): Fixture[] {
    if (isBlank(array)) return null;
    var radius = 100;
    for(var i = 0; i < array.length; i++){
      var fixture = array[i];
      fixture.dayOfTheYear = this.GetDayOfTheYear(fixture);

      var radius = 250;

      // if(i == 0) fixture.rotation = 0;
      // else if (i == 1) fixture.rotation = 45;
      // else if (i == 2) fixture.rotation = 90;
      // else if (i == 3) fixture.rotation = 135;
      // else if (i == 4) fixture.rotation = 180;
      // else if (i == 5) fixture.rotation = 225;
      // else if (i == 6) fixture.rotation = 270;
      // else fixture.rotation = 315;

      fixture.rotation = 90-fixture.dayOfTheYear;
      var radians = fixture.rotation * (Math.PI / 180);
      // if(radians > (Math.PI / 2) && radians < (3*Math.PI / 2))
      //   radians += Math.PI;
      fixture.translateX = radius*Math.cos(radians);
      fixture.translateY = 400 +radius*Math.sin(radians) -81*i;
    }
    return array;
  }

  private GetDayOfTheYear(fixture: Fixture) {
    if(fixture == null) return 0;
    if(fixture.date == null) return 0;
    var date = new Date(fixture.date);
    var daysFromPreviousMonths = this.GetDaysFromPreviousMonths(date.getMonth());
    return daysFromPreviousMonths + date.getDate();
  }

  private GetDaysFromPreviousMonths(month: number) {
    var days = 0;
    for(var i = 1; i <= month; i++){
      if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12)
        days += 31;
      else if (i == 2)
        days += 28;
      else days += 30;
    }
    return days;
  }
}
