import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SebButtonComponent } from './seb-button.component';

describe('SebButtonComponent', () => {
  let component: SebButtonComponent;
  let fixture: ComponentFixture<SebButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SebButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SebButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
