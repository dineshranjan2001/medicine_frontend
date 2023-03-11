import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddMedicinesContentsComponent } from './shop-add-medicines-contents.component';

describe('ShopAddMedicinesContentsComponent', () => {
  let component: ShopAddMedicinesContentsComponent;
  let fixture: ComponentFixture<ShopAddMedicinesContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopAddMedicinesContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopAddMedicinesContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
