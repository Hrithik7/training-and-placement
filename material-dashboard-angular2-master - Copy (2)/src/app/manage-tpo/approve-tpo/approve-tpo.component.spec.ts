import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveTPOComponent } from './approve-tpo.component';

describe('ApproveTPOComponent', () => {
  let component: ApproveTPOComponent;
  let fixture: ComponentFixture<ApproveTPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveTPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveTPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
