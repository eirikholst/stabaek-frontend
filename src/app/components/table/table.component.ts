import {Component, OnInit} from '@angular/core';
import any = jasmine.any;
import {TeamInTable} from "../../domain/teamInTable";
import {Router, ActivatedRoute} from "@angular/router";
import {AppRestService} from "../../service/app.rest.service";
import {Observable} from "rxjs";


@Component({
  selector: 'table',
  styleUrls: [
    '../styles/styles.scss',
  ],
  template: `
      <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>
  `
})
export class TableComponent implements OnInit{

  constructor(private appRestService: AppRestService,
              public route: ActivatedRoute,
              private router: Router) {}

  // private rows : TeamInTable[] = [
  //     { id: '4', name: 'Stabæk', place: 5, played: 3, won: 2, drawn: 0, lost: 1, goalsScored: 6, goalsConceded: 5, goalDifference: 1, points: 6, form: '1,2,1' },
  //     { id: '4', name: 'Sarpsborg 08', place: 1, played: 3, won: 3, drawn: 0, lost: 0, goalsScored: 9, goalsConceded: 2, goalDifference: 7, points: 9, form: '1,1,1' }
  //   ];

  private rows: TeamInTable[];

  // private rows : TeamInTable[] = null;

  columns = [
    { name: 'Name' },
    { name: 'Played' },
    { name: 'Won' },
    { name: 'Drawn' },
    { name: 'Lost' },
    { name: 'GoalsScored' },
    { name: 'GoalsConceded' },
    { name: 'GoalDifference' },
    { name: 'Points' },
    { name: 'Form' }
  ];

  ngOnInit(): void {
    this.appRestService.getTableRows().subscribe(
      teams => this.rows = teams);
  }

}
