import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/map";
import { AuthHttp } from "angular2-jwt";
import { ConfigService } from "./config.service";
import { ChuckNorris } from "../models/ChuckNorris";

@Injectable()
export class ChuckNorrisService {
    constructor(private http: AuthHttp, private config: ConfigService) {}

    getChuckNorrisFacts(): Observable<ChuckNorris[]> {
        return this.http.get(this.config.apiUrl + 'chuckNorris')
            .map((response: Response) => {return response.json()})
            .catch(ChuckNorrisService.handleError);
    }

    getChuckNorrisFact(id): Observable<ChuckNorris> {
        return this.http.get(this.config.apiUrl + 'chuckNorris/' + id)
            .map((response: Response) => {return response.json()})
            .catch(ChuckNorrisService.handleError);
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
}
