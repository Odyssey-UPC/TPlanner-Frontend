import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementInfoComponent } from './advertisement-info.component';

describe('AdvertisementInfoComponent', () => {
  let component: AdvertisementInfoComponent;
  let fixture: ComponentFixture<AdvertisementInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvertisementInfoComponent]
    });
    fixture = TestBed.createComponent(AdvertisementInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
