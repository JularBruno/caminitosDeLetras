import { TestBed, inject } from '@angular/core/testing';

import { AutonumericService } from './autonumeric.service';

describe('AutonumericService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutonumericService]
    });
  });

  it('should be created', inject([AutonumericService], (service: AutonumericService) => {
    expect(service).toBeTruthy();
  }));
});
