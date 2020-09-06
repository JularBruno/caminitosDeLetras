import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Constants } from '../app.constants';

@Injectable()
export class CategoryService extends BaseService {

  getApiEndPoint() {
    return Constants.API_METHOD_CATEGORIES;
  }
}
