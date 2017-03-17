import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { ROUTES } from "./app.routes";
import { AllFixturesComponent } from './components/fixture/fixtures.component';
import { StabaekFixturesComponent } from './components/fixture/stabaek-fixtures.component';
import { AllTeamsComponent } from './components/team/teams.component';
import { NavbarComponent } from './components/navbar/nav.navbar';
import {OrderByDate} from "./components/pipes/orderByDate";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllFixturesComponent,
    AllTeamsComponent,
    StabaekFixturesComponent,
    OrderByDate
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
