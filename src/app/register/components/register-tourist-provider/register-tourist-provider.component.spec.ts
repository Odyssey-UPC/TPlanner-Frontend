import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTouristProviderComponent } from './register-tourist-provider.component';

describe('RegisterTouristProviderComponent', () => {
  let component: RegisterTouristProviderComponent;
  let fixture: ComponentFixture<RegisterTouristProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTouristProviderComponent]
    });
    fixture = TestBed.createComponent(RegisterTouristProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
