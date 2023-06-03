import { TestBed } from '@angular/core/testing';

import { UserAddToCartService } from './user-add-to-cart.service';

describe('UserAddToCartService', () => {
  let service: UserAddToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAddToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
