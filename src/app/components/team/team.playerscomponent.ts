import {Component, Input, Output, EventEmitter, OnChanges} from "@angular/core";
import {Team} from "../../domain/team";
import {Player} from "../../domain/player";
import {Observable} from "rxjs";
import {AppRestService} from "../../service/app.rest.service";

@Component({
  selector: 'team-player-list',
  template: `  
  <div class="col-sm-4">
    <ul class="list-group list-group-transparent">
      <li class="list-group-item list-item-transparent"
          *ngFor="let player of players | async">
        <div class="list-group">
          <player-list-element [player]="player" [infoString]="player.position"></player-list-element>
        </div>
      </li>
    </ul>
  </div>`
})

export class TeamPlayerList implements OnChanges{

  @Input() public team: Team;
  private players: Observable<Player[]>;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  constructor(private appRestService: AppRestService) {

  }

  ngOnChanges(changes:any): void{
    var teamChange:Team = changes.team.currentValue;
    if(teamChange) {
      this.players = this.appRestService.getPlayers(teamChange.id);
      return;
    }
  }
}
