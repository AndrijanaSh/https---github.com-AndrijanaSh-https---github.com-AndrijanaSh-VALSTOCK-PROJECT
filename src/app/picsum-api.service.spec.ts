import { TestBed } from '@angular/core/testing';

import { PicsumApiService } from './picsum-api.service';

describe('PicsumApiService', () => {
  let service: PicsumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicsumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
