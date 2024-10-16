import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosEmpresaComponent } from './sobre-nos-empresa.component';

describe('SobreNosEmpresaComponent', () => {
  let component: SobreNosEmpresaComponent;
  let fixture: ComponentFixture<SobreNosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreNosEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreNosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
