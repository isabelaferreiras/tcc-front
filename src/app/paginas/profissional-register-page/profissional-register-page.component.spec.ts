import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfissionalRegisterPageComponent } from './profissional-register-page.component';

describe('ProfissionalRegisterPageComponent', () => {
  let component: ProfissionalRegisterPageComponent;
  let fixture: ComponentFixture<ProfissionalRegisterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionalRegisterPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfissionalRegisterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
