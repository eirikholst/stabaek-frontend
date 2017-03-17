import { Routes } from '@angular/router';
import {AllFixturesComponent} from "./components/fixture/fixtures.component";
import {AllTeamsComponent} from "./components/team/teams.component";
import {StabaekFixturesComponent} from "./components/fixture/stabaek-fixtures.component";

export const ROUTES: Routes = [
  { path: '', component: StabaekFixturesComponent },
  { path: 'fixtures', component: AllFixturesComponent },
  { path: 'stabaek-fixtures', component: StabaekFixturesComponent },
  { path: 'teams', component: AllTeamsComponent }
];
