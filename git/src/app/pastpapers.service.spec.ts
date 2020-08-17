import { TestBed } from '@angular/core/testing';

import { PastpapersService } from './pastpapers.service';

describe('PastpapersService', () => {
  let service: PastpapersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PastpapersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
