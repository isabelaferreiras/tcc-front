import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCardComponent } from './dialogo-card.component';

describe('DialogoCardComponent', () => {
  let component: DialogoCardComponent;
  let fixture: ComponentFixture<DialogoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
