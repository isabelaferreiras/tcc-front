import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabecalhoEmpresaComponent } from './cabecalho-empresa.component';

describe('CabecalhoEmpresaComponent', () => {
  let component: CabecalhoEmpresaComponent;
  let fixture: ComponentFixture<CabecalhoEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabecalhoEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CabecalhoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
