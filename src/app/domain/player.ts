import {Team} from "./team";
import {PlayerStatistic} from "./playerStatistic";
import {Transfer} from "./transfer";

export class Player{

  'id': string;
  'firstName': string;
  'lastName': string;
  'position': string;
  'team': Team;
  'number': number;
  'profilePictureUrl': string;
  'teamIdString': string;
  'playerStatistics': PlayerStatistic[];
  'tranfers': Transfer[];
}
