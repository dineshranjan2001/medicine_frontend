import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrdersHistoryContentsComponent } from './user-orders-history-contents.component';

describe('UserOrdersHistoryContentsComponent', () => {
  let component: UserOrdersHistoryContentsComponent;
  let fixture: ComponentFixture<UserOrdersHistoryContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrdersHistoryContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrdersHistoryContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
