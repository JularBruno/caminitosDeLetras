import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Headers } from '@angular/http';
import { Constants } from '../app.constants';
import { environment } from '../../environments/environment';


@Injectable()
export class UserService extends BaseService {
    getApiEndPoint() {
        return Constants.API_METHOD_USERS;
    }
    login(values): Promise<any> {
        const URL = environment.serverUrl + Constants.API_METHOD_USERS + '/login';
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(URL, JSON.stringify(values), { headers: headers })
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }
}
