import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUpdateMedicinesContentsComponent } from './shop-update-medicines-contents.component';

describe('ShopUpdateMedicinesContentsComponent', () => {
  let component: ShopUpdateMedicinesContentsComponent;
  let fixture: ComponentFixture<ShopUpdateMedicinesContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopUpdateMedicinesContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopUpdateMedicinesContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
