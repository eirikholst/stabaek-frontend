import {Component, OnInit} from '@angular/core';
import {AppRestService} from '../../service/app.rest.service';
import {Team} from '../../domain/team';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'all-teams',
  templateUrl: 'teamList.component.html',
  styleUrls: [
    '../styles/app.component.css',
  ],
  providers: [AppRestService]
})

export class AllTeamsComponent implements OnInit {

  private teams: Team[];
  private errorMessage: any;

  constructor(
    private appRestService: AppRestService,
    public route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.appRestService.getAllTeams()
      .subscribe(
        team => this.teams = team,
        error => this.errorMessage = <any>error);
  }
}
