import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppRestService} from "../../service/app.rest.service";
import {Player} from "../../domain/player";
import {ActivatedRoute} from "@angular/router";
import {PlayerStatistic} from "../../domain/playerStatistic";
import {Team} from "../../domain/team";
import {Observable} from "rxjs";
import {PlayerInfoType} from "./playerInfoType";

@Component({
  selector: 'player',
  templateUrl: 'player.component.html',
  styleUrls: [
    '../styles/app.component.css'
  ],
  providers: [AppRestService]
})

export class PlayerComponent implements OnInit, OnDestroy {

  private errorMessage: any;
  private sub: any;
  private _player : Player = null;
  private team: Observable<Team> = null;
  private id: any;
  private isLoading: boolean = true;
  private isShowingStatistics: boolean = true;
  private isShowingTransfers: boolean = false;

  constructor(private appRestService: AppRestService,
              public route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id == 'none')
        return;
      this.id = id;
      this.appRestService.getPlayer(id).subscribe(
        player => this.player = player,
        error => this.errorMessage = error,
      () =>  this.isLoading = false);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get player(): Player {
    return this._player;
  }

  set player(value: Player) {
    this._player = value;
    if(value == null) return;
    this.team = this.appRestService.getTeam(value.teamIdString);
  }

  showStatistics(): void{
    this.setDisplayInfo(PlayerInfoType.Statistics);
  }

  showTransfers(): void{
    this.setDisplayInfo(PlayerInfoType.Transfers);
  }

  private setDisplayInfo(playerInfoType: PlayerInfoType) {
    this.isShowingStatistics = playerInfoType == PlayerInfoType.Statistics;
    this.isShowingTransfers = playerInfoType == PlayerInfoType.Transfers;
  }
}
