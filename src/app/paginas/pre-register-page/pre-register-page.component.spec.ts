import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreRegisterPageComponent } from './pre-register-page.component';

describe('PreRegisterPageComponent', () => {
  let component: PreRegisterPageComponent;
  let fixture: ComponentFixture<PreRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
