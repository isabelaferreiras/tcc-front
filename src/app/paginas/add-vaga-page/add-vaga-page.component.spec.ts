import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVagaPageComponent } from './add-vaga-page.component';

describe('AddVagaPageComponent', () => {
  let component: AddVagaPageComponent;
  let fixture: ComponentFixture<AddVagaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVagaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVagaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
