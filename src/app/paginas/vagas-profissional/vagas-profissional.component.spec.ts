import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasProfissionalComponent } from './vagas-profissional.component';

describe('VagasProfissionalComponent', () => {
  let component: VagasProfissionalComponent;
  let fixture: ComponentFixture<VagasProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagasProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagasProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
