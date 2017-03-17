import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AllFixturesComponent } from './components/fixture/app.component.fixtures';
import { AllTeamsComponent } from './components/team/app.component.teams';
import { NavbarComponent } from './components/navbar/nav.navbar';

@NgModule({
  declarations: [
    AppComponent,
    AllFixturesComponent,
    AllTeamsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
