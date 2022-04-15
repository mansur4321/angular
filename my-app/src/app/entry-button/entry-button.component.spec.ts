import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryButtonComponent } from './entry-button.component';

describe('EntryButtonComponent', () => {
  let component: EntryButtonComponent;
  let fixture: ComponentFixture<EntryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
