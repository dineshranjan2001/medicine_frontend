import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsContentsComponent } from './contact-us-contents.component';

describe('ContactUsContentsComponent', () => {
  let component: ContactUsContentsComponent;
  let fixture: ComponentFixture<ContactUsContentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsContentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
