import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFonComponent } from './card-fon.component';

describe('CardFonComponent', () => {
  let component: CardFonComponent;
  let fixture: ComponentFixture<CardFonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
