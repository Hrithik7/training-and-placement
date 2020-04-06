import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TPOListPendingComponent } from './tpolist-pending.component';

describe('TPOListPendingComponent', () => {
  let component: TPOListPendingComponent;
  let fixture: ComponentFixture<TPOListPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TPOListPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TPOListPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
