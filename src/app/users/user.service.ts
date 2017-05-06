import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { ConfigService } from '../core/config.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { User } from './user.model';

@Injectable()
export class UserService {

  constructor(
    private authHttp: AuthHttp,
    private http: Http,
    private config: ConfigService,
    private handler: ErrorHandlerService,
  ) {}

  getUsers(): Observable<User[]> {
    return this.authHttp.get(this.config.apiUrl + 'users')
      .map((response: Response) => {return response.json()._embedded.users; })
      .catch(this.handler.handleError);
  }

  getUser(id): Observable<User> {
    return this.authHttp.get(this.config.apiUrl + 'users/' + id)
      .map((response: Response) => {return response.json(); })
      .catch(this.handler.handleError);
  }

  register(user: User): Observable<boolean> {
    return this.http.post(this.config.apiUrl + 'auth/register', user)
      .map((response: Response) => {
        console.log('response', response);
        return response.json();
      })
      .catch(this.handler.handleError);
  }
}
