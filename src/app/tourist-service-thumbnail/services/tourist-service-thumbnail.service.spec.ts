import { TestBed } from '@angular/core/testing';

import { TouristServiceThumbnailService } from './tourist-service-thumbnail.service';

describe('TouristServiceThumbnailService', () => {
  let service: TouristServiceThumbnailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristServiceThumbnailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
