import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ConfigService {
    private _apiUrl = 'http://localhost:8080/';

    get apiUrl(): string {
        return this._apiUrl;
    }
}
