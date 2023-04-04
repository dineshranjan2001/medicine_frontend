import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateMyprofileContentsComponent } from './user-update-myprofile-contents.component';

describe('UserUpdateMyprofileContentsComponent', () => {
  let component: UserUpdateMyprofileContentsComponent;
  let fixture: ComponentFixture<UserUpdateMyprofileContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateMyprofileContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserUpdateMyprofileContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
