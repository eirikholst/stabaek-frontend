import {Component, Input} from "@angular/core";
import {Player} from "../../domain/player";

@Component({
  selector: 'player-list-element',
  template: `<a class="row list-group-item pointer" [routerLink]="['/players', player.id]">
    <span class="pull-left">{{player.number}}: {{player.firstName}} {{player.lastName}}</span>
<span class="pull-right">{{infoString}}</span>
</a>`
})


export class PlayerListElement{

  @Input() public player : Player;
  @Input() public infoString : String;

  constructor() {
  }

}
