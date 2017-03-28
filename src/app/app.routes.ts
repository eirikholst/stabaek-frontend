import {RouterModule} from '@angular/router';
import {FixtureListComponent} from "./components/fixtureList/fixtureList.component";
import {AllTeamsComponent} from "./components/teamList/teamList.component";
import {TestComponent} from "./components/test/test.component";
import {FixtureComponent} from "./components/fixture/fixture.component";
import {TeamComponent} from "./components/team/team.component";
import {FixtureOverviewComponent} from "./components/fixtureOverview/fixtureOverview.component";

export const ROUTES = [
  {path: '', component: AllTeamsComponent},
  {path: 'fixtures', component: FixtureOverviewComponent, children:[
    {path: 'fixtureList', component: FixtureListComponent, outlet: 'list'},
    {path: ':id', component: FixtureComponent, outlet: 'fixtureInfo'}
  ]},
  {path: 'teams', component: AllTeamsComponent},
  {path: 'test', component: TestComponent},
  // {path: 'fixtures/:id', component: FixtureComponent},
  {path: 'teams/:id', component: TeamComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(ROUTES);
