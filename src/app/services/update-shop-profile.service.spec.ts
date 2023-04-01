import { TestBed } from '@angular/core/testing';

import { UpdateShopProfileService } from './update-shop-profile.service';

describe('UpdateShopProfileService', () => {
  let service: UpdateShopProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateShopProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
