import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterHomeComponent } from './filter-home.component';

describe('FilterHomeComponent', () => {
  let component: FilterHomeComponent;
  let fixture: ComponentFixture<FilterHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterHomeComponent]
    });
    fixture = TestBed.createComponent(FilterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
