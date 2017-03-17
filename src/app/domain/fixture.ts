import {Team} from './team';
export class Fixture {
  'id': String
  'homeTeam': Team;
  'awayTeam': Team;
  'date': Date;
  'readableDate': String;
}
