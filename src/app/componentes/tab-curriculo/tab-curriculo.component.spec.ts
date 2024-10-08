import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCurriculoComponent } from './tab-curriculo.component';

describe('TabCurriculoComponent', () => {
  let component: TabCurriculoComponent;
  let fixture: ComponentFixture<TabCurriculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabCurriculoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabCurriculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
