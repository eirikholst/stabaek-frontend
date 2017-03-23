import { Routes } from '@angular/router';
import {AllFixturesComponent} from "./components/fixtureList/fixtureList.component";
import {AllTeamsComponent} from "./components/team/teams.component";
import {StabaekFixturesComponent} from "./components/fixtureList/stabaek-fixtures.component";
import {TestComponent} from "./components/test/test.component";

export const ROUTES: Routes = [
  { path: '', component: StabaekFixturesComponent },
  { path: 'fixtures', component: AllFixturesComponent },
  { path: 'stabaek-fixtures', component: StabaekFixturesComponent },
  { path: 'teams', component: AllTeamsComponent },
  { path: 'test', component: TestComponent }
];
