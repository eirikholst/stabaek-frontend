import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Team} from '../domain/team';
import {Fixture} from '../domain/fixture';
import {Player} from '../domain/player';
import {PlayerStatistic} from '../domain/playerStatistic';
import {Stadium} from '../domain/stadium';
import {HeadToHead} from '../domain/headToHead';
import {TeamInTable} from '../domain/teamInTable';

@Injectable()
export class AppRestService {

  // private restUrl = 'http://localhost:8005/';  // URL to web api
  private restUrl = 'http://7thheaven.myqnapcloud.com:8888/';  // URL to web api
  // private restUrl = 'http://10.0.3.2:8888/';  // URL to web api
  // private restUrl = 'http://stabaek-backend:8888/';  // URL to web api

  constructor(private http: Http) {
  }

  getRequest(url): Observable<any> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllTeams(): Observable<Team[]> {
    return this.getRequest(this.restUrl + 'teams')
  }

  getAllFixtures(): Observable<Fixture[]> {
    return this.getRequest(this.restUrl + 'fixtures')
  }

  getAllStabaekFixtures(): Observable<Fixture[]> {
    return this.getRequest(this.restUrl + 'fixtures/findByTeam=Stabæk')
  }

  getFixture(id: String): Observable<Fixture> {
    return this.getRequest(this.restUrl + 'fixtures/' + id);
  }

  getTeam(id: String): Observable<Team> {
    return this.getRequest(this.restUrl + 'teams/' + id);
  }

  getPlayers(teamId: String): Observable<Player[]> {
    return this.getRequest(this.restUrl + 'teams/' + teamId + '/players');
  }

  getStadium(id: String): Observable<Stadium> {
    return this.getRequest(this.restUrl + 'stadiums/' + id);
  }

  getPlayer(id: any): Observable<Player> {
    return this.getRequest(this.restUrl + 'players/' + id);
  }

  getPlayerStatisticsByStage(stageId: String, omitZeros: boolean): Observable<PlayerStatistic[]> {
    return this.getRequest(this.restUrl + 'playerStatistics?stageId=' + stageId + '&hasValue=' + omitZeros);
  }

  getHeadToHead(fixtureId: String): Observable<HeadToHead> {
    return this.getRequest(this.restUrl + 'fixtures/' + fixtureId + '/headToHead');
  }

  getTableRows(): Observable<TeamInTable[]> {
    return this.getRequest(this.restUrl + 'table/teams');
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
