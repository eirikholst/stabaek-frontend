import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixtureList.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
  providers: [AppRestService]
})

export class FixtureListComponent implements OnInit {

  private fixtures: Fixture[];
  private errorMessage: any;

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
      this.router.navigate(['/fixtures', {outlets: {'fixtureInfo': [id]}}]);
  }
}
