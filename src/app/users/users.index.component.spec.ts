import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersIndexComponent } from './users.index.component';
import { UserService } from './user.service';
import { By } from '@angular/platform-browser';

describe('UsersIndexComponent', () => {
  let fixture: ComponentFixture<UsersIndexComponent>;
  let userService;
  let de;
  let el;
  let userServiceStub;
  let comp: UsersIndexComponent;

  beforeEach(() => {
    // stub UserService for test purposes
    userServiceStub = {
      isLoggedIn: true,
      user: { name: 'Test User'}
    };

    TestBed.configureTestingModule({
      declarations: [ UsersIndexComponent ],
      providers:    [ {provide: UserService, useValue: userServiceStub } ]
    });

    fixture = TestBed.createComponent(UsersIndexComponent);
    comp    = fixture.componentInstance;

    // UserService from the root injector
    userService = TestBed.get(UserService);

    //  get the "welcome" element by CSS selector (e.g., by class name)
    // de = fixture.debugElement.query(By.css(''));
    // el = de.nativeElement;
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });
});
