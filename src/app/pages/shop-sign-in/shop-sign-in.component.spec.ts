import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSignInComponent } from './shop-sign-in.component';

describe('ShopSignInComponent', () => {
  let component: ShopSignInComponent;
  let fixture: ComponentFixture<ShopSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSignInComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
