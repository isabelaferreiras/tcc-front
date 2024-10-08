import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDialogoComponent } from './card-dialogo.component';

describe('CardDialogoComponent', () => {
  let component: CardDialogoComponent;
  let fixture: ComponentFixture<CardDialogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDialogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
