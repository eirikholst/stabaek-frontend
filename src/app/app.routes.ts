import {RouterModule} from '@angular/router';
import {AllFixturesComponent} from "./components/fixtureList/fixtureList.component";
import {AllTeamsComponent} from "./components/teamList/teamList.component";
import {StabaekFixturesComponent} from "./components/fixtureList/stabaek-fixtures.component";
import {TestComponent} from "./components/test/test.component";
import {FixtureComponent} from "./components/fixture/fixture.component";
import {TeamComponent} from "./components/team/team.component";

export const ROUTES = [
  {path: '', component: StabaekFixturesComponent},
  {path: 'fixtures', component: AllFixturesComponent, children:[
    {path: ':id', component: FixtureComponent, outlet: 'fixtureInfoOutlet'}
  ]},
  {path: 'stabaek-fixtures', component: StabaekFixturesComponent},
  {path: 'teams', component: AllTeamsComponent},
  {path: 'test', component: TestComponent},
  {path: 'fixtures/:id', component: FixtureComponent},
  {path: 'teams/:id', component: TeamComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(ROUTES);
