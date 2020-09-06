import { TestBed } from '@angular/core/testing';

import { UserFieldsService } from './user-fields.service';

describe('UserFieldsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserFieldsService = TestBed.get(UserFieldsService);
    expect(service).toBeTruthy();
  });
});
