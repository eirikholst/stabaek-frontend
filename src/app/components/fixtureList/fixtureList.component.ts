import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';
import {ActivatedRoute, Router} from "@angular/router";
import {FixtureUtils} from "../utils/FixtureUtils";
import {OrderByDate} from "../pipes/orderByDate";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtureList.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class FixtureListComponent implements OnInit {

  private _fixtures: Fixture[];
  private errorMessage: any;
  private isShowingAllMatches: boolean = false;
  private fixtureUtils: FixtureUtils;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
      this.fixtureUtils = new FixtureUtils();
    this.appRestService.getAllStabaekFixtures()
      .subscribe(
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }

  showFixtureInfo(id) {
      this.router.navigate(['/fixtures', {outlets: {'fixtureInfoOutlet': [id]}}]);
  }

  showStabaekMatches(){
    this.appRestService.getAllStabaekFixtures()
      .subscribe(
        fixtures => this._fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }

  showAllMatches(){
    this.appRestService.getAllFixtures()
      .subscribe(
        fixtures => this._fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }

  get fixtures(): Fixture[] {
    return this._fixtures;
  }

  set fixtures(value: Fixture[]) {
    this._fixtures = value;
    if(value == null) return;
    this.showFixtureInfo(this.fixtureUtils.getNextFixture(value).id);
  }
}
