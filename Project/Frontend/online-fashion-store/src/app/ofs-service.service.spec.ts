import { TestBed } from '@angular/core/testing';

import { OfsServiceService } from './ofs-service.service';

describe('OfsServiceService', () => {
  let service: OfsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
