import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishlistContentsComponent } from './user-wishlist-contents.component';

describe('UserWishlistContentsComponent', () => {
  let component: UserWishlistContentsComponent;
  let fixture: ComponentFixture<UserWishlistContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWishlistContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWishlistContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
