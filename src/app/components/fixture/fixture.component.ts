import {Component} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {ActivatedRoute} from "@angular/router";
import {Fixture} from "../../domain/fixture";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixture.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
  providers: [AppRestService]
})

export class FixtureComponent {

  private errorMessage: any;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute,
    private fixture: Fixture){
  }
}
