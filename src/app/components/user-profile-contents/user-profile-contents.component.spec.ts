import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileContentsComponent } from './user-profile-contents.component';

describe('UserProfileContentsComponent', () => {
  let component: UserProfileContentsComponent;
  let fixture: ComponentFixture<UserProfileContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProfileContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserProfileContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
