import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContentsComponent } from './home-contents.component';

describe('HomeContentsComponent', () => {
  let component: HomeContentsComponent;
  let fixture: ComponentFixture<HomeContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
