import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopUpdateProfileContentsComponent } from './shop-update-profile-contents.component';

describe('ShopUpdateProfileContentsComponent', () => {
  let component: ShopUpdateProfileContentsComponent;
  let fixture: ComponentFixture<ShopUpdateProfileContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopUpdateProfileContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopUpdateProfileContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
