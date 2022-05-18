import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInfoFailedComponent } from './action-info-failed.component';

describe('ActionInfoFailedComponent', () => {
  let component: ActionInfoFailedComponent;
  let fixture: ComponentFixture<ActionInfoFailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInfoFailedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInfoFailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
