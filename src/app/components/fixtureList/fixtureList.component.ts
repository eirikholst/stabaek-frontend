import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';
import {ActivatedRoute, Router} from "@angular/router";
import {FixtureUtils} from "../utils/FixtureUtils";
import {OrderByDate} from "../pipes/orderByDate";
import {ScreenUtils} from "../utils/ScreenUtils";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtureList.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class FixtureListComponent implements OnInit {

  private fixtures: Fixture[];
  private errorMessage: any;
    private fixtureUtils: FixtureUtils;

  constructor(private appRestService: AppRestService,
              public route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.fixtureUtils = new FixtureUtils();
    this.appRestService.getAllStabaekFixtures()
      .subscribe(
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }

  showFixtureInfo(id) {
    if (ScreenUtils.isOnMobile())
      this.router.navigate(['/mobileFixtures', id]);
    else
      this.router.navigate(['/fixtures', {outlets: {'fixtureInfoOutlet': [id]}}]);
  }

  showStabaekMatches() {
    this.appRestService.getAllStabaekFixtures()
      .subscribe(
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }

  showAllMatches() {
    this.appRestService.getAllFixtures()
      .subscribe(
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }
}
