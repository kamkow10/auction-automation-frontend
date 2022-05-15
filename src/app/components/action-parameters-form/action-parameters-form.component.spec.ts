import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionParametersFormComponent } from './action-parameters-form.component';

describe('ActionParametersFormComponent', () => {
  let component: ActionParametersFormComponent;
  let fixture: ComponentFixture<ActionParametersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionParametersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionParametersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
