import { TestBed } from '@angular/core/testing';

import { ChatLineService } from './chat-line.service';

describe('ChatLineService', () => {
  let service: ChatLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
