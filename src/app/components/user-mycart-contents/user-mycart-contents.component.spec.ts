import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMycartContentsComponent } from './user-mycart-contents.component';

describe('UserMycartContentsComponent', () => {
  let component: UserMycartContentsComponent;
  let fixture: ComponentFixture<UserMycartContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMycartContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMycartContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
