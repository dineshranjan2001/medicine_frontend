import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionsContentsComponent } from './terms-and-conditions-contents.component';

describe('TermsAndConditionsContentsComponent', () => {
  let component: TermsAndConditionsContentsComponent;
  let fixture: ComponentFixture<TermsAndConditionsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionsContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndConditionsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
