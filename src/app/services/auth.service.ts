import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from '../models/User';
import { AuthHttp, JwtHelper } from 'angular2-jwt';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private _user = new User();

    constructor(
      private http: Http,
      private authHttp: AuthHttp,
      private config: ConfigService,
      private jwt: JwtHelper,
      private router: Router
    ) {}

    public login(username: string, password: string): Observable<boolean> {
        const url = this.config.apiUrl + 'oauth/token';
        const headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic YWNtZTphY21lc2VjcmV0'
        });
        const options = new RequestOptions({ headers: headers });
        const grant_type = 'password';
        const body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', grant_type);

        return this.http.post(url, body, options)
        .map((response: Response) => {
            // login successful if there's a jwt access_token in the response
            const responseObject = response.json();
            if (responseObject) {
                // store jwt access_token in local storage to keep user logged in between page refreshes
                localStorage.setItem('refresh_token', responseObject.refresh_token);
                localStorage.setItem('id_token', responseObject.access_token);

                // return true to indicate successful login
                return true;
            } else {
                // return false to indicate failed login
                return false;
            }
        })
        .catch(AuthService.handleError);
    }

    private static handleError (error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            const description = body.error_description;
            errMsg = `${error.status} - ${error.statusText || ''}, ${err}, ${description}`;
        } else {
            errMsg = error.error_description ? error.error_description : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    public logout(): void {
        // clear access_token remove user from local storage to log user out
        localStorage.removeItem('id_token');
        localStorage.removeItem('refresh_token');
        this.router.navigate(['login']);
    }

    public getUser(): Observable<User> {
        return this.authHttp.get(this.config.apiUrl + 'user')
        .map((response: Response) => { return response.json(); })
        .catch(AuthService.handleError);
    }

    public user(): User {
        return this._user;
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem('id_token');
        return token && !this.jwt.isTokenExpired(token);
    }

    public getToken(): string {
        return localStorage.getItem('id_token');
    }

    setUser(user: User) {
        this._user = user;
    }
}
