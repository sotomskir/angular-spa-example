import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class ErrorHandlerService {

  constructor(private auth: AuthService) { }

  handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let err: string;
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      err = `${body.status || error.status} - ${body.statusText}, ${body.code || body.error}, ${body.message || body.error_description}`;
      errMsg = `${body.message || body.error_description}`;
      console.error(err);
      if (error.status === 401) {
        console.log('redirecting to login');
        return this.auth.logout();
      }
      if (error.status === 0) {
        console.log('redirecting to technical break');
      }
    } else {
      errMsg = error.error_description ? error.error_description : error.toString();
      console.error(errMsg);
    }
    return Observable.throw(errMsg);
  }
}
