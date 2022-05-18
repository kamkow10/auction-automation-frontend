import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInfoActiveComponent } from './action-info-active.component';

describe('ActionInfoActiveComponent', () => {
  let component: ActionInfoActiveComponent;
  let fixture: ComponentFixture<ActionInfoActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInfoActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInfoActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
