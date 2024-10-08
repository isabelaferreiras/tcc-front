import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesProfissionalComponent } from './informacoes-profissional.component';

describe('InformacoesProfissionalComponent', () => {
  let component: InformacoesProfissionalComponent;
  let fixture: ComponentFixture<InformacoesProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
