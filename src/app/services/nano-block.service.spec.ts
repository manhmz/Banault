import { TestBed, inject } from '@angular/core/testing';

import { BananoBlockService } from './banano-block.service';

describe('BananoBlockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BananoBlockService]
    });
  });

  it('should be created', inject([BananoBlockService], (service: BananoBlockService) => {
    expect(service).toBeTruthy();
  }));
});
