import { TestBed } from '@angular/core/testing';

import { ShopProfileService } from './shop-profile.service';

describe('ShopProfileService', () => {
  let service: ShopProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
