import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Constants } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class BuyService extends BaseService{

  getApiEndPoint() {
    return Constants.API_METHOD_BUYS;
  }
}
