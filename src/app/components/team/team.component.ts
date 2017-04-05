/**
 * Created by eirik.holst on 24.03.2017.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {AppRestService} from "../../service/app.rest.service";
import {Observable} from "rxjs";
import {Team} from "../../domain/team";
import {ActivatedRoute} from "@angular/router";
import {Player} from "../../domain/player";
import {PlayerListElement} from "../player/player.listcomponent";

@Component({
  selector: 'teams',
  templateUrl: 'team.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class TeamComponent implements OnInit, OnDestroy{

  private sub: any;
  private id: any;
  private team: Observable<Team>;
  private players: Observable<Player[]>;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      this.id = id;
      this.team = this.appRestService.getTeam(id);
      this.players = this.appRestService.getPlayers(id);
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
