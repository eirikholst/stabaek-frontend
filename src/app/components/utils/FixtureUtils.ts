import {Fixture} from "../../domain/fixture";
import {OrderByDate} from "../pipes/orderByDate";
import {AppRestService} from "../../service/app.rest.service";

export class FixtureUtils {

  private orderByDate: OrderByDate;

  constructor() {
    this.orderByDate = new OrderByDate();
  }

  getNextFixture(value: Fixture[]): Fixture {
    const currentMilliseconds = new Date().valueOf();
    const orderedFixtures = this.orderByDate.transform(value, null);
    for (let fixture of orderedFixtures) {
      if (fixture.date.valueOf() - currentMilliseconds > 0) {
        return fixture;
      }
    }
    return null;
  }
}
