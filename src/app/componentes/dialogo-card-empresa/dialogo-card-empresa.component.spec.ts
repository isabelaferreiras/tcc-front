import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCardEmpresaComponent } from './dialogo-card-empresa.component';

describe('DialogoCardEmpresaComponent', () => {
  let component: DialogoCardEmpresaComponent;
  let fixture: ComponentFixture<DialogoCardEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoCardEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoCardEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
