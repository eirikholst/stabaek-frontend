/**
 * Created by eirik.holst on 17.03.2017.
 */
import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtures.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
  providers: [AppRestService]
})

export class StabaekFixturesComponent implements OnInit {

  private fixtures: Fixture[];
  private errorMessage: any;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.appRestService.getAllStabaekFixtures()
      .subscribe(
        fixture => this.fixtures = fixture,
        error => this.errorMessage = <any>error);
  }
}
