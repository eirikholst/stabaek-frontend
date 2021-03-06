"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/map');
var AppRestService = (function () {
    function AppRestService(http) {
        this.http = http;
        // private restUrl = 'http://localhost:8080/';  // URL to web api
        this.restUrl = 'https://stabaek-backend.cfapps.io/'; // URL to web api
    }
    AppRestService.prototype.getAllTeams = function () {
        return this.http.get(this.restUrl + 'teams')
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppRestService.prototype.getAllFixtures = function () {
        return this.http.get(this.restUrl + 'fixtures')
            .map(this.extractData)
            .catch(this.handleError);
    };
    AppRestService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AppRestService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    AppRestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppRestService);
    return AppRestService;
}());
exports.AppRestService = AppRestService;
//# sourceMappingURL=app.rest.service.js.map