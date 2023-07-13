import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingLoginPageOnlyComponent } from './testing-login-page-only.component';

describe('TestingLoginPageOnlyComponent', () => {
  let component: TestingLoginPageOnlyComponent;
  let fixture: ComponentFixture<TestingLoginPageOnlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingLoginPageOnlyComponent]
    });
    fixture = TestBed.createComponent(TestingLoginPageOnlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
