import { Stadium } from './stadium';
import { Team } from "./team";

export class Fixture {
  'id': String;
  'date': Date;
  'readableDate': String;
  'dayOfTheYear': number;
  'rotation': number;
  'translateX': number;
  'translateY': number;
  'homeTeamId': String
  'homeTeamNameString': String
  'awayTeamId': String
  'awayTeamNameString': String
  'stadium': Stadium;
  'stadiumNameString': String;
  'stadiumIdString': String;
  'homeTeam': Team;
  'awayTeam': Team;
}
