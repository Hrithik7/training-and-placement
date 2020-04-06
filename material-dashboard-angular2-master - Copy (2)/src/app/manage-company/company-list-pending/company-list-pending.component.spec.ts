import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyListPendingComponent } from './company-list-pending.component';

describe('CompanyListPendingComponent', () => {
  let component: CompanyListPendingComponent;
  let fixture: ComponentFixture<CompanyListPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyListPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
