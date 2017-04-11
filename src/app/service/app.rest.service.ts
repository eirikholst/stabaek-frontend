import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Team} from '../domain/team';
import {Fixture} from '../domain/fixture';
import {Player} from "../domain/player";
import {PlayerStatistic} from "../domain/playerStatistic";
import {Stadium} from "../domain/stadium";
import {HeadToHead} from "../domain/headToHead";
import {TeamInTable} from "../domain/teamInTable";

@Injectable()
export class AppRestService {

  private restUrl = 'http://localhost:8005/';  // URL to web api
  // private restUrl = 'https://stabaek-backend.cfapps.io/';  // URL to web api

  constructor(private http: Http) {
  }

  getAllTeams(): Observable<Team[]> {
    return this.http.get(this.restUrl + 'teams')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllFixtures(): Observable<Fixture[]> {
    return this.http.get(this.restUrl + 'fixtures')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllStabaekFixtures(): Observable<Fixture[]> {
    return this.http.get(this.restUrl + 'fixtures/findByTeam=Stabæk')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFixture(id: String): Observable<Fixture> {
    return this.http.get(this.restUrl + 'fixtures/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTeam(id: String): Observable<Team> {
    return this.http.get(this.restUrl + 'teams/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPlayers(teamId: String): Observable<Player[]> {
    return this.http.get(this.restUrl + 'teams/' + teamId + "/players")
      .map(this.extractData)
      .catch(this.handleError);
  }

  getStadium(id: String): Observable<Stadium> {
    return this.http.get(this.restUrl + 'stadiums/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPlayer(id: any): Observable<Player> {
    return this.http.get(this.restUrl + 'players/' + id)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getPlayerStatisticsByStage(stageId: String, omitZeros: boolean): Observable<PlayerStatistic[]> {
    return this.http.get(this.restUrl + 'playerStatistics?stageId=' + stageId + "&hasValue=" + omitZeros)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHeadToHead(fixtureId: String): Observable<HeadToHead> {
    return this.http.get(this.restUrl + 'fixtures/' + fixtureId + "/headToHead")
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTableRows(): Observable<TeamInTable[]> {
    return this.http.get(this.restUrl + 'table/teams')
      .map(this.extractData)
      .catch(this.handleError);
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
