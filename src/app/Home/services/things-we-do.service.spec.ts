import { TestBed } from '@angular/core/testing';

import { ThingsWeDoService } from './things-we-do.service';

describe('ThingsWeDoService', () => {
  let service: ThingsWeDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThingsWeDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
