import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatosDaVagaComponent } from './candidatos-da-vaga.component';

describe('CandidatosDaVagaComponent', () => {
  let component: CandidatosDaVagaComponent;
  let fixture: ComponentFixture<CandidatosDaVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatosDaVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidatosDaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
