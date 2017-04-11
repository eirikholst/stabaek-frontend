import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import any = jasmine.any;
import {TeamInTable} from "../../domain/teamInTable";
import {Router, ActivatedRoute} from "@angular/router";
import {AppRestService} from "../../service/app.rest.service";
import {ScreenUtils} from "../utils/ScreenUtils";
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {AddFormArrayToTeamInTable} from "../pipes/addFormArrayToTeamInTable";


@Component({
  selector: 'table',
  styleUrls: [
    '../styles/app.component.css',
    '../styles/styles.scss',
    '../styles/table.css',
  ],
  template: `
      <div>
        <ngx-datatable class="stabaek"
          [rows]="rows"
          [columns]="columns"
          [columnMode]="'standard'">
        </ngx-datatable>
      <ng-template #formTemplate let-row="row" let-value="value" let-i="index">        
        <div class="inline" *ngFor="let formValue of row.formArray">
            <a *ngIf="formValue == 1" class="formbox w">W</a>
            <a *ngIf="formValue == 2" class="formbox l">L</a>
            <a *ngIf="formValue == 3" class="formbox d">D</a>
        </div>
      </ng-template>
      <ng-template #numberTemplate let-row="row" let-value="value" let-i="index">
        <div class="container-centered">
          {{value}}
         </div>
      </ng-template>
      <ng-template #teamNameTemplate let-row="row" let-value="value" let-i="index">
          <a class="white" [routerLink]="['/teams', row.id]">{{value}}</a>
      </ng-template>      
    </div>
  `
})
export class TableComponent implements OnInit {

  @ViewChild('formTemplate') public formTemplate: TemplateRef<any>;
  @ViewChild('numberTemplate') public numberTemplate: TemplateRef<any>;
  @ViewChild('teamNameTemplate') public teamNameTemplate: TemplateRef<any>;

  private _rows: TeamInTable[];
  columns = this.getColumns();

  private addFormArrayPipe : AddFormArrayToTeamInTable;

  constructor(private appRestService: AppRestService,
              public route: ActivatedRoute,
              private router: Router) {
    this.addFormArrayPipe = new AddFormArrayToTeamInTable();
  }


  private getColumns() {
    if (ScreenUtils.isOnMobile())
      return this.getMobileColumns();
    return this.getAllColumns();
  }

  ngOnInit(): void {
    this.appRestService.getTableRows().subscribe(
      teams => this.rows = this.addFormArrayPipe.transform(teams, null));
  }

  private getAllColumns() {
    return [
      {name: '#', prop:'place', width: '40'},
      {name: 'Name', prop:'name', width: '150', cellTemplate: this.teamNameTemplate},
      {name: 'Played', width: '100'},
      {name: 'Won', width: '100'},
      {name: 'Drawn', width: '100'},
      {name: 'Lost', width: '100'},
      {name: 'GF', prop:'goalsScored', width: '100'},
      {name: 'GA', prop:'goalsConceded', width: '100'},
      {name: 'GD', prop:'goalDifference', width: '100'},
      {name: 'Points', width: '100'},
      {name: 'Form', prop:'formArray', width: '150', cellTemplate: this.formTemplate},
    ];
  }


  private getMobileColumns() {
    return [
      {name: 'Name', width: '120', cellTemplate: this.teamNameTemplate},
      {name: 'P', prop:'played', width: '40'},
      {name: 'Pts', prop:'points', width: '40'},
      {name: 'Form', prop:'formArray', width: '120', cellTemplate: this.formTemplate},
    ];
  }

  get rows(): TeamInTable[] {
    return this._rows;
  }

  set rows(value: TeamInTable[]) {
    this._rows = value;
    this.columns = this.getColumns();
  }

}
