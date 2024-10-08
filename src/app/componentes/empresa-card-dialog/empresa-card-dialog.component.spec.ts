import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCardDialogComponent } from './empresa-card-dialog.component';

describe('EmpresaCardDialogComponent', () => {
  let component: EmpresaCardDialogComponent;
  let fixture: ComponentFixture<EmpresaCardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpresaCardDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpresaCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
