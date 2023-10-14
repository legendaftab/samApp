import { TestBed } from '@angular/core/testing';

import { HomeSService } from './home-s.service';

describe('HomeSService', () => {
  let service: HomeSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
