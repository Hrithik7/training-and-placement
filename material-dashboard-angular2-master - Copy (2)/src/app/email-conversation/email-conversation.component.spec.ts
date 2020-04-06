import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConversationComponent } from './email-conversation.component';

describe('EmailConversationComponent', () => {
  let component: EmailConversationComponent;
  let fixture: ComponentFixture<EmailConversationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailConversationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailConversationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
