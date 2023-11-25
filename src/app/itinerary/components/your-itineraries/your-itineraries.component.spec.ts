import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItinerariesComponent } from './your-itineraries.component';

describe('YourItinerariesComponent', () => {
  let component: YourItinerariesComponent;
  let fixture: ComponentFixture<YourItinerariesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItinerariesComponent]
    });
    fixture = TestBed.createComponent(YourItinerariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
