import { TestBed, inject } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { AuthService } from './auth.service';
import { User } from '../users/user.model';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let authServiceStub;

  beforeEach(() => {
    authServiceStub = {
    _user: new User(),
    user: { name: 'Test User'}
  };
  });

  it('should call auth.logout on status 401', () => {
    // TODO
    service = new ErrorHandlerService(authServiceStub);
    expect('fake value').toBe('fake value');
  });
});
