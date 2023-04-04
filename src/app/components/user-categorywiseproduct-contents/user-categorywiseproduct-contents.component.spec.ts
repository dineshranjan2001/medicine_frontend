import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCategorywiseproductContentsComponent } from './user-categorywiseproduct-contents.component';

describe('UserCategorywiseproductContentsComponent', () => {
  let component: UserCategorywiseproductContentsComponent;
  let fixture: ComponentFixture<UserCategorywiseproductContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCategorywiseproductContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCategorywiseproductContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
