import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelectedProfileComponent } from './card-selected-profile.component';

describe('CardSelectedProfileComponent', () => {
  let component: CardSelectedProfileComponent;
  let fixture: ComponentFixture<CardSelectedProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSelectedProfileComponent]
    });
    fixture = TestBed.createComponent(CardSelectedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
