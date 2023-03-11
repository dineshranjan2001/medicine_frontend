import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMystoreShowcategoriesComponent } from './shop-mystore-showcategories.component';

describe('ShopMystoreShowcategoriesComponent', () => {
  let component: ShopMystoreShowcategoriesComponent;
  let fixture: ComponentFixture<ShopMystoreShowcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopMystoreShowcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopMystoreShowcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
