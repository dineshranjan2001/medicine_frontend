import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIndivisualProductDetailsContentsComponent } from './user-indivisual-product-details-contents.component';

describe('UserIndivisualProductDetailsContentsComponent', () => {
  let component: UserIndivisualProductDetailsContentsComponent;
  let fixture: ComponentFixture<UserIndivisualProductDetailsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserIndivisualProductDetailsContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIndivisualProductDetailsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
