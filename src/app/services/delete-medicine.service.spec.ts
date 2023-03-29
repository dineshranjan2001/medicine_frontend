import { TestBed } from '@angular/core/testing';

import { DeleteMedicineService } from './delete-medicine.service';

describe('DeleteMedicineService', () => {
  let service: DeleteMedicineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteMedicineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
