import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagasDisponiveisComponent } from './vagas-disponiveis.component';

describe('VagasDisponiveisComponent', () => {
  let component: VagasDisponiveisComponent;
  let fixture: ComponentFixture<VagasDisponiveisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagasDisponiveisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagasDisponiveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
