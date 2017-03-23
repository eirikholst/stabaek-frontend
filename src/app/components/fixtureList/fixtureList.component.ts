import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtureList.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
  providers: [AppRestService]
})

export class AllFixturesComponent implements OnInit {

  private fixtures: Fixture[];
  private errorMessage: any;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.appRestService.getAllFixtures()
      .subscribe(
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }
}
