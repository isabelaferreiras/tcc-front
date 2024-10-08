import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRegisterEmpresaComponent } from './new-register-empresa.component';

describe('NewRegisterEmpresaComponent', () => {
  let component: NewRegisterEmpresaComponent;
  let fixture: ComponentFixture<NewRegisterEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRegisterEmpresaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRegisterEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
