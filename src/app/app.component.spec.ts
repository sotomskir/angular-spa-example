/* tslint:disable:no-unused-variable */

import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { User } from './users/user.model';
import { AuthService } from './core/auth.service';

describe('AppComponent', () => {
  let authServiceStub;
  let comp;
  let authService;
  let fixture;

  beforeEach(() => {
    authServiceStub = {
      _user: new User(),
      user: { name: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers:    [ {provide: AuthService, useValue: authServiceStub } ]
    });
    TestBed.compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    comp    = fixture.componentInstance;

    // UserService from the root injector
    authService = TestBed.get(AuthService);

  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
