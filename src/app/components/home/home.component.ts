import {Component, OnInit} from "@angular/core";
import {AppRestService} from "../../service/app.rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ScreenUtils} from "../utils/ScreenUtils";
import {Fixture} from "../../domain/fixture";
import {FixtureUtils} from "../utils/FixtureUtils";

@Component({
  selector: 'home',
  template: '<p>Loading...</p>',
  providers: [AppRestService]
})

export class Home implements OnInit {

  private _fixtures: Fixture[];
  private fixtureUtils: FixtureUtils;
  private errorMessage: any;

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

  get fixtures(): Fixture[] {
    return this._fixtures;
  }

  set fixtures(value: Fixture[]) {
    this._fixtures = value;
    this.navigateToNextFixture();
  }

  private navigateToNextFixture() {
    let id = this.fixtureUtils.getNextFixture(this.fixtures).id;
    if (ScreenUtils.isOnMobile())
      this.router.navigate(['/mobileFixtures', id]);
    else
      this.router.navigate(['/fixtures', {outlets: {'fixtureInfoOutlet': [id]}}]);
  }

}
