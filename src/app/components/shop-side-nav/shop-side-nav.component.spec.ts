import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopSideNavComponent } from './shop-side-nav.component';

describe('ShopSideNavComponent', () => {
  let component: ShopSideNavComponent;
  let fixture: ComponentFixture<ShopSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopSideNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
