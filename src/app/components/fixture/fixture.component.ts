import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {ActivatedRoute} from "@angular/router";
import {Fixture} from "../../domain/fixture";
import {Observable} from "rxjs";
import {Team} from "../../domain/team";
import {HeadToHead} from "../../domain/headToHead";

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
  private _stadiumImageUrl: String = null;
  private id: any;
  private isLoading: boolean = true;
  private teamSubjectToInfoExtraction : Observable<Team>;
  private isShowingTeamPlayerList: boolean = true;
  private isShowingHeadToHeadInfo: boolean = false;
  private headToHead: HeadToHead = null;

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
    if(this._fixture == null) return;
    this.showTeamInfo(this._fixture.homeTeamId);
  }

  showAwayTeamInfo() {
    if(this._fixture == null) return;
    this.showTeamInfo(this._fixture.awayTeamId);
  }

  showTeamInfo(id){
    this.isShowingTeamPlayerList = true;
    this.isShowingHeadToHeadInfo = false;
    this.teamSubjectToInfoExtraction = this.appRestService.getTeam(id);
  }

  showHeadToHead(){
    if(this.headToHead == null)
      this.appRestService.getHeadToHead(this.fixture.id).subscribe(
        headToHead => this.headToHead = headToHead);
    this.isShowingHeadToHeadInfo = true;
    this.isShowingTeamPlayerList = false;
  }

  get fixture(): Fixture {
    return this._fixture;
  }

  set fixture(value: Fixture) {
    this._fixture = value;
    this.showHomeTeamInfo();
    if(value == null) return;
    this.appRestService.getStadium(value.stadiumIdString).subscribe(
      stadium => this.stadiumImageUrl = stadium.stadiumImageUrl
    );
  }

  get stadiumImageUrl(): String {
    return this._stadiumImageUrl;
  }

  set stadiumImageUrl(value: String) {
    this._stadiumImageUrl = value;
  }
}
