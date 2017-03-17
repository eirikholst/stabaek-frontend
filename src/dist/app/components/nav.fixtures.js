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
var app_rest_service_1 = require('../service/app.rest.service');
var AllFixturesComponent = (function () {
    function AllFixturesComponent(appRestService) {
        this.appRestService = appRestService;
    }
    AllFixturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appRestService.getAllFixtures()
            .subscribe(function (fixture) { return _this.fixtures = fixture; }, function (error) { return _this.errorMessage = error; });
    };
    AllFixturesComponent = __decorate([
        core_1.Component({
            selector: 'all-fixtures',
            templateUrl: 'app.component.fixtures.html',
            styleUrls: ['app.component.css'],
            providers: [app_rest_service_1.AppRestService]
        }),
        __metadata('design:paramtypes', [app_rest_service_1.AppRestService])
    ], AllFixturesComponent);
    return AllFixturesComponent;
}());
exports.AllFixturesComponent = AllFixturesComponent;
//# sourceMappingURL=nav.fixtures.js.map
