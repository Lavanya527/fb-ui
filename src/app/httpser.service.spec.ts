import { TestBed } from '@angular/core/testing';

import { HttpserService } from './httpser.service';

describe('HttpserService', () => {
  let service: HttpserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
