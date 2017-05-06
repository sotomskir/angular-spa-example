"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var _404_component_1 = require("./components/shared/404.component");
var login_component_1 = require("./components/login/login.component");
var auth_service_1 = require("./services/auth.service");
var app_component_1 = require("./components/app/app.component");
var users_component_1 = require("./components/users/users.component");
var auth_module_1 = require("./auth.module");
var home_component_1 = require("./components/home/home.component");
var user_service_1 = require("./services/user.service");
var config_service_1 = require("./services/config.service");
var angular2_jwt_1 = require("angular2-jwt");
var chuckNorris_service_1 = require("./services/chuckNorris.service");
var auth_guard_1 = require("./guards/auth.guard");
var chuckNorris_component_1 = require("./components/chuckNorris/chuckNorris.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
require("hammerjs");
var welcome_component_1 = require("./components/welcome/welcome.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            chuckNorris_component_1.ChuckNorrisComponent,
            users_component_1.UsersComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            _404_component_1.PageNotFoundComponent,
            welcome_component_1.WelcomeComponent,
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            auth_module_1.AuthModule,
            animations_1.BrowserAnimationsModule,
            material_1.MaterialModule
        ],
        providers: [
            auth_service_1.AuthService,
            user_service_1.UserService,
            chuckNorris_service_1.ChuckNorrisService,
            config_service_1.ConfigService,
            angular2_jwt_1.JwtHelper,
            auth_guard_1.CanActivateViaAuthGuard
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
