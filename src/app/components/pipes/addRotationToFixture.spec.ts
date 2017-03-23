import {AddRotationToFixture} from './addRotationToFixture';
import {Fixture} from "../../domain/fixture";

describe('AddRotationToFixture', () => {

  beforeEach(function () {
    this.addRotationToFixture = new AddRotationToFixture();
  });

  it('shouldBeZero', function(){
    var fixture = new Fixture();
    fixture.date = new Date();
    var fixtureArray = new Fixture[1];
    fixture[0] = fixture;

    var transformedFixtureArray = this.addRotationToFixture.transform(fixtureArray);
    expect(transformedFixtureArray[0].dayOfTheYear).toBe(0);
  })
});
