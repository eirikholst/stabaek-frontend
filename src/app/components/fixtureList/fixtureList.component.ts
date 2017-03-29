import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtureList.component.html',
  styleUrls: [
    '../styles/app.component.css',
    '../styles/navmasthead.component.css'
  ],
  providers: [AppRestService]
})

export class FixtureListComponent implements OnInit {

  private fixtures: Fixture[];
  private errorMessage: any;
  private isShowingAllMatches: boolean = false;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute,
    private router: Router){
  }

  ngOnInit(): void {
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
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }

  showAllMatches(){
    this.appRestService.getAllFixtures()
      .subscribe(
        fixtures => this.fixtures = fixtures,
        error => this.errorMessage = <any>error);
  }
}
