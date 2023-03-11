import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProfileContentsComponent } from './shop-profile-contents.component';

describe('ShopProfileContentsComponent', () => {
  let component: ShopProfileContentsComponent;
  let fixture: ComponentFixture<ShopProfileContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProfileContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProfileContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
