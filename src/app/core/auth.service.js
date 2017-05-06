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
var User_1 = require("../models/User");
var AuthService = AuthService_1 = (function () {
    function AuthService(http, authHttp, config, jwt, router) {
        this.http = http;
        this.authHttp = authHttp;
        this.config = config;
        this.jwt = jwt;
        this.router = router;
        this._user = new User_1.User();
    }
    AuthService.prototype.login = function (username, password) {
        var url = this.config.apiUrl + 'oauth/token';
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic YWNtZTphY21lc2VjcmV0'
        });
        var options = new http_1.RequestOptions({ headers: headers });
        var grant_type = 'password';
        var body = new http_1.URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', grant_type);
        return this.http.post(url, body, options)
            .map(function (response) {
            // login successful if there's a jwt access_token in the response
            var responseObject = response.json();
            if (responseObject) {
                // store jwt access_token in local storage to keep user logged in between page refreshes
                localStorage.setItem('refresh_token', responseObject.refresh_token);
                localStorage.setItem('id_token', responseObject.access_token);
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        })
            .catch(AuthService_1.handleError);
    };
    AuthService.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var body = error.json();
        error.error_description = body.error_description;
        error.error = body.error;
        console.error(error);
        return rxjs_1.Observable.throw(error);
    };
    AuthService.prototype.logout = function () {
        // clear access_token remove user from local storage to log user out
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['login']);
    };
    AuthService.prototype.getUser = function () {
        return this.authHttp.get(this.config.apiUrl + 'user')
            .map(function (response) { return response.json(); })
            .catch(AuthService_1.handleError);
    };
    AuthService.prototype.user = function () {
        return this._user;
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('id_token');
        return token && !this.jwt.isTokenExpired(token);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.setUser = function (user) {
        this._user = user;
    };
    return AuthService;
}());
AuthService = AuthService_1 = __decorate([
    core_1.Injectable()
], AuthService);
exports.AuthService = AuthService;
var AuthService_1;
