import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTuristProviderComponent } from './register-turist-provider.component';

describe('RegisterTuristProviderComponent', () => {
  let component: RegisterTuristProviderComponent;
  let fixture: ComponentFixture<RegisterTuristProviderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterTuristProviderComponent]
    });
    fixture = TestBed.createComponent(RegisterTuristProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
