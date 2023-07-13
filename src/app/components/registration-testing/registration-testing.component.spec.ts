import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationTestingComponent } from './registration-testing.component';

describe('RegistrationTestingComponent', () => {
  let component: RegistrationTestingComponent;
  let fixture: ComponentFixture<RegistrationTestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationTestingComponent]
    });
    fixture = TestBed.createComponent(RegistrationTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
