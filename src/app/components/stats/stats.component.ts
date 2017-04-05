import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppRestService} from "../../service/app.rest.service";
import {ActivatedRoute} from "@angular/router";
import {PlayerStatistic} from "../../domain/playerStatistic";
import {StatisticType} from "./statisticType";


@Component({
  selector: 'stats',
  templateUrl: 'stats.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})



export class StatsComponent implements OnInit {


  private stageId: String = "673879";
  private errorMessage: any;
  private playerStatistics: PlayerStatistic[];
  private statisticType : StatisticType = StatisticType.Goals;

  constructor(private appRestService: AppRestService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.appRestService.getPlayerStatisticsByStage(this.stageId)
      .subscribe(
        playerStatistic => this.playerStatistics = playerStatistic,
        error => this.errorMessage = <any>error);
  }

  getInfoString(playerStatistic: PlayerStatistic){
    switch(this.statisticType){
      case StatisticType.Goals:
        return playerStatistic.goals;
      case StatisticType.Assists:
        return playerStatistic.assists;
      case StatisticType.RedCards:
        return playerStatistic.redCards;
      case StatisticType.YellowCards:
        return playerStatistic.yellowCards;
    }
  }

  showTopScorers(): void {
    this.statisticType = StatisticType.Goals;
  }

  showAssists(): void {
    this.statisticType = StatisticType.Assists;
  }

  showRedCards(): void {
    this.statisticType = StatisticType.RedCards;
  }

  showYellowCards(): void {
    this.statisticType = StatisticType.YellowCards;
  }StatisticType
}
