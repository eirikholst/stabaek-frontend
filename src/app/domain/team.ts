import {Stadium} from "./stadium";
import {Fixture} from "./fixture";
import {Player} from "./player";

export class Team {

  'id': String;
  'name': String;
  'stadium': Stadium;
  'stadiumName': String;
  'homeFixtures': Fixture[];
  'awayFixtures': Fixture[];
  'players': Player[];
  'teamLogoUrl': String;

}
