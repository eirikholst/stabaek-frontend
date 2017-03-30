import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppRestService} from "../../service/app.rest.service";
import {Player} from "../../domain/player";
import {ActivatedRoute} from "@angular/router";
import {PlayerStatistic} from "../../domain/playerStatistic";
import {Team} from "../../domain/team";
import {Observable} from "rxjs";

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
  private playerStatistics: PlayerStatistic[] = null;
  private id: any;
  private isLoading : boolean = true;

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
    this.appRestService.getPlayerStatisticsByPlayer(value.id).subscribe(
      playerStatistics => this.playerStatistics = playerStatistics,
      error => this.errorMessage = error
    );
    this.team = this.appRestService.getTeam(value.teamIdString);
  }

}
