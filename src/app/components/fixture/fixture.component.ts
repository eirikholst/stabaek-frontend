import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {ActivatedRoute} from "@angular/router";
import {Fixture} from "../../domain/fixture";
import {Observable} from "rxjs";
import {Team} from "../../domain/team";
import {Player} from "../../domain/player";
import {Stadium} from "../../domain/stadium";

@Component({
  selector: 'fixtures',
  templateUrl: 'fixture.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class FixtureComponent implements OnInit, OnDestroy {

  private errorMessage: any;
  private sub: any;
  private _fixture: Fixture = null;
  private stadium: Observable<Stadium>;
  private id: any;
  private isLoading: boolean = true;
  private isShowingTeamInfo: boolean = false;
  private teamSubjectToInfoExtraction : Observable<Team>;
  private playersSubjectToInfoExtraction : Observable<Player[]>;

  constructor(private appRestService: AppRestService,
              public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id == 'none')
        return;
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

  showHomeTeamInfo() {
    this.isShowingTeamInfo = false;
    if(this._fixture == null) return;
    this.showTeamInfo(this._fixture.homeTeamId);
  }

  showAwayTeamInfo() {
    this.isShowingTeamInfo = false;
    if(this._fixture == null) return;
    this.showTeamInfo(this._fixture.awayTeamId);
  }

  showTeamInfo(id){
    this.teamSubjectToInfoExtraction = this.appRestService.getTeam(id);
    this.playersSubjectToInfoExtraction = this.appRestService.getPlayers(id);
    this.isShowingTeamInfo = true;
  }


  get fixture(): Fixture {
    return this._fixture;
  }

  set fixture(value: Fixture) {
    this._fixture = value;
    this.showHomeTeamInfo();
    if(value == null) return;
    this.stadium = this.appRestService.getStadium(value.stadiumIdString);
  }
}
