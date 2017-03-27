import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {ActivatedRoute} from "@angular/router";
import {Fixture} from "../../domain/fixture";
import {Observable} from "rxjs";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixture.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
  providers: [AppRestService]
})

export class FixtureComponent implements OnInit, OnDestroy{

  private errorMessage: any;
  private sub: any;
  private fixture: Fixture = null;
  private id: any;
  private isLoading: boolean = true;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
      this.appRestService.getFixture(id).subscribe(
        fixture => this.fixture = fixture,
        error => this.errorMessage = error,
        () => this.isLoading = false);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
