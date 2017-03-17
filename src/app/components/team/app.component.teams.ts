import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Team} from '../../domain/team';

@Component({
  selector: 'all-teams',
  templateUrl: 'app.component.teams.html',
  providers: [AppRestService]
})

export class AllTeamsComponent implements OnInit {

  private teams: Team[];
  private errorMessage: any;

  constructor(private appRestService: AppRestService) {

  }

  ngOnInit(): void {
    this.appRestService.getAllTeams()
      .subscribe(
        team => this.teams = team,
        error => this.errorMessage = <any>error);
  }
}
