import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTpoRegistrationComponent } from './sub-tpo-registration.component';

describe('SubTpoRegistrationComponent', () => {
  let component: SubTpoRegistrationComponent;
  let fixture: ComponentFixture<SubTpoRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTpoRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTpoRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
