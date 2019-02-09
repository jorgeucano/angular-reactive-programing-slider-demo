import { TestBed } from '@angular/core/testing';

import { SimpsonsAPIService } from './simpsons-api.service';

describe('SimpsonsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpsonsAPIService = TestBed.get(SimpsonsAPIService);
    expect(service).toBeTruthy();
  });
});
