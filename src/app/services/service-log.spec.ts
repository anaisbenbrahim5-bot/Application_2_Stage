import { TestBed } from '@angular/core/testing';

import { ServiceLog } from './service-log';

describe('ServiceLog', () => {
  let service: ServiceLog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
