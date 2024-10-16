import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCurriculoComponent } from './container-curriculo.component';

describe('ContainerCurriculoComponent', () => {
  let component: ContainerCurriculoComponent;
  let fixture: ComponentFixture<ContainerCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerCurriculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
