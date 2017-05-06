"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
var UserService = UserService_1 = (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.config.apiUrl + 'users')
            .map(function (response) { return response.json()._embedded.users; })
            .catch(UserService_1.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(this.config.apiUrl + 'users/' + id)
            .map(function (response) { return response.json(); })
            .catch(UserService_1.handleError);
    };
    UserService.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            var description = body.error_description;
            errMsg = error.status + " - " + (error.statusText || '') + ", " + err + ", " + description;
        }
        else {
            errMsg = error.error_description ? error.error_description : error.toString();
        }
        console.error(errMsg);
        return rxjs_1.Observable.throw(errMsg);
    };
    return UserService;
}());
UserService = UserService_1 = __decorate([
    core_1.Injectable()
], UserService);
exports.UserService = UserService;
var UserService_1;
