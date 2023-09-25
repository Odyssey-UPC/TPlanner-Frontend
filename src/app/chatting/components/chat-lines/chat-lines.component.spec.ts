import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLinesComponent } from './chat-lines.component';

describe('ChatLinesComponent', () => {
  let component: ChatLinesComponent;
  let fixture: ComponentFixture<ChatLinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatLinesComponent]
    });
    fixture = TestBed.createComponent(ChatLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
