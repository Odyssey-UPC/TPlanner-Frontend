import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementDividerComponent } from './advertisement-divider.component';

describe('AdvertisementDividerComponent', () => {
  let component: AdvertisementDividerComponent;
  let fixture: ComponentFixture<AdvertisementDividerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementDividerComponent]
    });
    fixture = TestBed.createComponent(AdvertisementDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
