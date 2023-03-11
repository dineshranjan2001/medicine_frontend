import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMystoreContentsComponent } from './shop-mystore-contents.component';

describe('ShopMystoreContentsComponent', () => {
  let component: ShopMystoreContentsComponent;
  let fixture: ComponentFixture<ShopMystoreContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMystoreContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMystoreContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
