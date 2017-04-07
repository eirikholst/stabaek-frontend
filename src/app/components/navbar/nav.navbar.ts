import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Fixture} from "../../domain/fixture";
import {AppRestService} from "../../service/app.rest.service";
import {OrderByDate} from "../pipes/orderByDate";
import {FixtureUtils} from "../utils/FixtureUtils";

@Component({
  selector: 'navbar',
  templateUrl: 'nav.navbar.html',
  styleUrls: [
    '../styles/app.component.css',
    '../styles/navbar.desktop.css',
    '../styles/navbar.mobile.css',
  ],
  providers:[OrderByDate]
})

export class NavbarComponent implements OnInit{
  private _nextFixture : Fixture = null;
  private _allFixtures : Fixture[];
  private nextHomeTeamLogoUrl : String = "";
  private nextAwayTeamLogoUrl : String = "";
  private fixtureUtils : FixtureUtils;

  constructor(
    private appRestService: AppRestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setNextFixture()
    this.fixtureUtils = new FixtureUtils();
  }

  private setNextFixture(): void {
        this.appRestService.getAllStabaekFixtures().subscribe(
          fixtures => this.allFixtures = fixtures
        );
  }

  get allFixtures(): Fixture[] {
    return this._allFixtures;
  }

  set allFixtures(value: Fixture[]) {
    this._allFixtures = value;
    if(value == null) return;
    this.nextFixture = this.fixtureUtils.getNextFixture(value);
  }

  get nextFixture(): Fixture {
    return this._nextFixture;
  }

  set nextFixture(value: Fixture) {
    this._nextFixture = value;
    if(value == null) return;
    this.initializeClock(value.date.valueOf());
    this.appRestService.getTeam(value.homeTeamId).subscribe(
      team => this.nextHomeTeamLogoUrl = team.teamLogoUrl
    );
    this.appRestService.getTeam(value.awayTeamId).subscribe(
      team => this.nextAwayTeamLogoUrl = team.teamLogoUrl
    );
  }

  private initializeClock(endTime: number) {
    const clock = document.getElementById("clockdiv");
    const daySpan = clock.querySelector(".days");
    const hourSpan = clock.querySelector(".hours");
    const minuteSpan = clock.querySelector(".minutes");
    const secondSpan = clock.querySelector(".seconds");

    function updateClock(){
      const timeRemaining = getTimeRemaining(endTime);

      daySpan.innerHTML = timeRemaining.days.toString();
      hourSpan.innerHTML = timeRemaining.hours.toString();
      minuteSpan.innerHTML = timeRemaining.minutes.toString();
      secondSpan.innerHTML = timeRemaining.seconds.toString();

      function getTimeRemaining(endTime: number) {
        const t = endTime.valueOf() - (new Date()).valueOf();
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

    }

    var timeInterval = setInterval(updateClock, 1000);
  }
}
