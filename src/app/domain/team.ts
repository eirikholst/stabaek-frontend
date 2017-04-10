import {Stadium} from "./stadium";
import {Fixture} from "./fixture";
import {Player} from "./player";
import {Transfer} from "./transfer";
import {PlayerStatistic} from "./playerStatistic";

export class Team {

  'id': string;
  'name': string;
  'stadium': string;
  'stadiumName': String;
  'homeFixtures': Fixture[];
  'awayFixtures': Fixture[];
  'players': Player[];
  'teamLogoUrl': String;
  'tramsfers': Transfer[];
  'playerStatistics': PlayerStatistic[];

  'wonTotal': number;
  'wonHome': number;
  'wonAway': number;
  'drawnTotal': number;
  'drawnHome': number;
  'drawnAway': number;
  'lostTotal': number;
  'lostHome': number;
  'lostAway': number;
  'goalsForTotal': number;
  'goalsForHome': number;
  'goalsForAway': number;
  'goalsAgainstTotal': number;
  'goalsAgainstHome': number;
  'goalsAgainstAway': number;
}
