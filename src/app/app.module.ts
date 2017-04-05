import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { ROUTES } from "./app.routes";
import { FixtureListComponent } from './components/fixtureList/fixtureList.component';
import { AllTeamsComponent } from './components/teamList/teamList.component';
import { NavbarComponent } from './components/navbar/nav.navbar';
import {OrderByDate} from "./components/pipes/orderByDate";
import {AddRotationToFixture} from "./components/pipes/addRotationToFixture";
import {TestComponent} from "./components/test/test.component";
import {FixtureComponent} from "./components/fixture/fixture.component";
import {TeamComponent} from "./components/team/team.component";
import {AddReadableDateToFixture} from "./components/pipes/addReadableDateToFixture";
import {FixtureOverviewComponent} from "./components/fixtureOverview/fixtureOverview.component";
import {PlayerComponent} from "./components/player/player.component";
import {StatsComponent} from "./components/stats/stats.component";
import {PlayerListElement} from "./components/player/player.listcomponent";
import {TeamPlayerList} from "./components/team/team.playerscomponent";
import {OrderByStatisticType} from "./components/pipes/orderByStatisticType";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FixtureListComponent,
    FixtureComponent,
    FixtureOverviewComponent,
    AllTeamsComponent,
    PlayerComponent,
    PlayerListElement,
    TeamComponent,
    TeamPlayerList,
    StatsComponent,
    OrderByDate,
    OrderByStatisticType,
    AddRotationToFixture,
    AddReadableDateToFixture,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
