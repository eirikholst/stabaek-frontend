import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Fixture} from '../../domain/fixture';

@Component({
  selector: 'all-fixtures',
  templateUrl: 'fixtures.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class AllFixturesComponent implements OnInit {

  private fixtures: Fixture[];
  private errorMessage: any;

  constructor(private appRestService: AppRestService) {

  }

  ngOnInit(): void {
    this.appRestService.getAllFixtures()
      .subscribe(
        fixture => this.fixtures = fixture,
        error => this.errorMessage = <any>error);
  }
}
