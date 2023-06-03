import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorContentsComponent } from './error-contents.component';

describe('ErrorContentsComponent', () => {
  let component: ErrorContentsComponent;
  let fixture: ComponentFixture<ErrorContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
