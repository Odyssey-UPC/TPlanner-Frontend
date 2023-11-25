import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItineraryCatalogComponent } from './itinerary-catalog.component';

describe('ItineraryCatalogComponent', () => {
  let component: ItineraryCatalogComponent;
  let fixture: ComponentFixture<ItineraryCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItineraryCatalogComponent]
    });
    fixture = TestBed.createComponent(ItineraryCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
