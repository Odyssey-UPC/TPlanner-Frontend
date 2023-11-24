import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectedProfileComponent } from './section-selected-profile.component';

describe('SectionSelectedProfileComponent', () => {
  let component: SectionSelectedProfileComponent;
  let fixture: ComponentFixture<SectionSelectedProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionSelectedProfileComponent]
    });
    fixture = TestBed.createComponent(SectionSelectedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
