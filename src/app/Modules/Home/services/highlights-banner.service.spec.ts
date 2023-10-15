import { TestBed } from '@angular/core/testing';

import { HighlightsBannerService } from './highlights-banner.service';

describe('HighlightsBannerService', () => {
  let service: HighlightsBannerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HighlightsBannerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
