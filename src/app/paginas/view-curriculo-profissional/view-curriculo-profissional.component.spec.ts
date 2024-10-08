import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCurriculoProfissionalComponent } from './view-curriculo-profissional.component';

describe('ViewCurriculoProfissionalComponent', () => {
  let component: ViewCurriculoProfissionalComponent;
  let fixture: ComponentFixture<ViewCurriculoProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCurriculoProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCurriculoProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
