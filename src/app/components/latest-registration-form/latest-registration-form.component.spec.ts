import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestRegistrationFormComponent } from './latest-registration-form.component';

describe('LatestRegistrationFormComponent', () => {
  let component: LatestRegistrationFormComponent;
  let fixture: ComponentFixture<LatestRegistrationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LatestRegistrationFormComponent]
    });
    fixture = TestBed.createComponent(LatestRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
