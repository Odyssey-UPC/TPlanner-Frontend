import { TestBed } from '@angular/core/testing';

import { TuristServiceService } from './turist-service.service';

describe('TuristServiceService', () => {
  let service: TuristServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuristServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
