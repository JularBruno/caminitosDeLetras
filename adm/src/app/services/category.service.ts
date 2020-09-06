import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Constants } from '../app.constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  getApiEndPoint() {
    return Constants.API_METHOD_CATEGORIES;
  }
}
