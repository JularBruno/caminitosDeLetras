import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';

describe('FieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsService = TestBed.get(ProductsService);
    expect(service).toBeTruthy();
  });
});
