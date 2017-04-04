import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from "./components/shared/404.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";
import { AppComponent } from "./components/app/app.component";
import { UsersComponent } from "./components/users/users.component";
import { AuthModule } from "./auth.module";
import { HomeComponent } from "./components/home/home.component";
import { UserService } from "./services/user.service";
import { ConfigService } from "./services/config.service";
import { JwtHelper } from "angular2-jwt";
import { ChuckNorrisService } from "./services/chuckNorris.service";
import { CanActivateViaAuthGuard } from "./guards/auth.guard";
import { ChuckNorrisComponent } from "./components/chuckNorris/chuckNorris.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "@angular/material";
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    ChuckNorrisComponent,
    UsersComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    AuthService,
    UserService,
    ChuckNorrisService,
    ConfigService,
    JwtHelper,
    CanActivateViaAuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
