import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHomeContentsComponent } from './user-home-contents.component';

describe('UserHomeContentsComponent', () => {
  let component: UserHomeContentsComponent;
  let fixture: ComponentFixture<UserHomeContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHomeContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserHomeContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
