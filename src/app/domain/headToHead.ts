import {Team} from "./team";
import {Fixture} from "./fixture";

export class HeadToHead{
  'id': string;
  'teams': Team[];
  'previousFixtures': Fixture[];
  'previousFixturesOtherTournaments': Fixture[];
}
