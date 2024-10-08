import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddVagaComponent } from './form-add-vaga.component';

describe('FormAddVagaComponent', () => {
  let component: FormAddVagaComponent;
  let fixture: ComponentFixture<FormAddVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAddVagaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAddVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
