import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppRestService} from "../../service/app.rest.service";
import {ActivatedRoute} from "@angular/router";
import {PlayerStatistic} from "../../domain/playerStatistic";
import {Observable} from "rxjs";

@Component({
  selector: 'stats',
  templateUrl: 'stats.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class StatsComponent implements OnInit {


  private stageId: String = "672248";
  private errorMessage: any;
  private playerStatistics: PlayerStatistic[];
  private showTopScorersFlag: boolean = true;
  private showAssistsFlag: boolean = false;
  private showRedCardsFlag: boolean = false;
  private showYellowCardsFlag: boolean = false;

  constructor(private appRestService: AppRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.appRestService.getPlayerStatisticsByStage(this.stageId)
      .subscribe(
        playerStatistic => this.playerStatistics = playerStatistic,
        error => this.errorMessage = <any>error);
  }

  showTopScorers(): void {
    this.showAssistsFlag = false;
    this.showTopScorersFlag = true;
    this.showRedCardsFlag = false;
    this.showYellowCardsFlag = false;
  }

  showAssists(): void {
    this.showAssistsFlag = true;
    this.showTopScorersFlag = false;
    this.showRedCardsFlag = false;
    this.showYellowCardsFlag = false;
  }

  showRedCards(): void {
    this.showAssistsFlag = false;
    this.showTopScorersFlag = false;
    this.showRedCardsFlag = true;
    this.showYellowCardsFlag = false;
  }

  showYellowCards(): void {
    this.showAssistsFlag = false;
    this.showTopScorersFlag = false;
    this.showRedCardsFlag = false;
    this.showYellowCardsFlag = true;
  }
}
