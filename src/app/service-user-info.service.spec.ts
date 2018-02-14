import { TestBed, inject } from '@angular/core/testing';

import { ServiceUserInfoService } from './service-user-info.service';

describe('ServiceUserInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUserInfoService]
    });
  });

  it('should be created', inject([ServiceUserInfoService], (service: ServiceUserInfoService) => {
    expect(service).toBeTruthy();
  }));
});
