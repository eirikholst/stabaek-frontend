import {Team} from "./team";
import {Fixture} from "./fixture";

export class Stadium{

  'id': String;
  'name': String;
  'team': Team;
  'fixtures': Fixture[];
  'stadiumImageUrl': String;

}
