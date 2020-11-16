import { TestBed } from '@angular/core/testing';

import { CommetsServiceService } from './commets-service.service';

describe('CommetsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommetsServiceService = TestBed.get(CommetsServiceService);
    expect(service).toBeTruthy();
  });
});
