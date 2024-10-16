import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVagasCandidatadasComponent } from './dialog-vagas-candidatadas.component';

describe('DialogVagasCandidatadasComponent', () => {
  let component: DialogVagasCandidatadasComponent;
  let fixture: ComponentFixture<DialogVagasCandidatadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogVagasCandidatadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogVagasCandidatadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
