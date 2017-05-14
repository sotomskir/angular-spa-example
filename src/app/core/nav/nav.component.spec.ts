import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NavService } from './nav.service';
import { AuthService } from '../auth.service';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let navServiceStub;
  let authServiceStub;

  beforeEach(async(() => {
    navServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    authServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [ NavComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers:    [
        {provide: NavService, useValue: navServiceStub },
        {provide: AuthService, useValue: authServiceStub },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
