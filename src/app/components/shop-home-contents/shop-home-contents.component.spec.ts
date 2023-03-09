import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopHomeContentsComponent } from './shop-home-contents.component';

describe('ShopHomeContentsComponent', () => {
  let component: ShopHomeContentsComponent;
  let fixture: ComponentFixture<ShopHomeContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopHomeContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopHomeContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
