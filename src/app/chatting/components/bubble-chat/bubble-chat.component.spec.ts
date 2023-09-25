import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChatComponent } from './bubble-chat.component';

describe('BubbleChatComponent', () => {
  let component: BubbleChatComponent;
  let fixture: ComponentFixture<BubbleChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleChatComponent]
    });
    fixture = TestBed.createComponent(BubbleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
