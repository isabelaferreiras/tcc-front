import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreNosProfissionalComponent } from './sobre-nos-profissional.component';

describe('SobreNosProfissionalComponent', () => {
  let component: SobreNosProfissionalComponent;
  let fixture: ComponentFixture<SobreNosProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreNosProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SobreNosProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
