import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaCandidatadaComponent } from './vaga-candidatada.component';

describe('VagaCandidatadaComponent', () => {
  let component: VagaCandidatadaComponent;
  let fixture: ComponentFixture<VagaCandidatadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VagaCandidatadaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VagaCandidatadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
