import {RouterModule} from '@angular/router';
import {FixtureListComponent} from "./components/fixtureList/fixtureList.component";
import {AllTeamsComponent} from "./components/teamList/teamList.component";
import {TestComponent} from "./components/test/test.component";
import {FixtureComponent} from "./components/fixture/fixture.component";
import {TeamComponent} from "./components/team/team.component";
import {FixtureOverviewComponent} from "./components/fixtureOverview/fixtureOverview.component";
import {PlayerComponent} from "./components/player/player.component";
import {StatsComponent} from "./components/stats/stats.component";
import {Home} from "./components/home/home.component";
import {TableComponent} from "./components/table/table.component";

export const ROUTES = [
  {path: '', component: Home},
  {path: 'fixtures', component: FixtureOverviewComponent, children:[
    {path: 'fixtureList', component: FixtureListComponent, outlet: 'fixtureListOutlet'},
    {path: ':id', component: FixtureComponent, outlet: 'fixtureInfoOutlet'}
  ]},
  {path: 'teams', component: AllTeamsComponent},
  {path: 'test', component: TestComponent},
  {path: 'mobileFixtures/:id', component: FixtureComponent},
  {path: 'teams/:id', component: TeamComponent},
  {path: 'players/:id', component: PlayerComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'table', component: TableComponent},

];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(ROUTES);
