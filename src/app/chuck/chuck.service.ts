import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';
import { ConfigService } from '../core/config.service';
import { ErrorHandlerService } from '../core/error-handler.service';
import { Chuck } from './chuck.model';

@Injectable()
export class ChuckService {
    constructor(private http: AuthHttp, private config: ConfigService, private handler: ErrorHandlerService) {}

    getChuckNorrisFacts(): Observable<Chuck[]> {
        return this.http.get(this.config.apiUrl + 'chuckNorris')
            .map((response: Response) => { return response.json(); })
            .catch(this.handler.handleError);
    }

    getChuckNorrisFact(id): Observable<Chuck> {
        return this.http.get(this.config.apiUrl + 'chuckNorris/' + id)
            .map((response: Response) => { return response.json(); })
            .catch(this.handler.handleError);
    }

}
