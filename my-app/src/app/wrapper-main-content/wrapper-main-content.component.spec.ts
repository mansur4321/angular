import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperMainContentComponent } from './wrapper-main-content.component';

describe('WrapperMainContentComponent', () => {
  let component: WrapperMainContentComponent;
  let fixture: ComponentFixture<WrapperMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperMainContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
