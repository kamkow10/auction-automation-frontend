import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInfoDoneComponent } from './action-info-done.component';

describe('ActionInfoDoneComponent', () => {
  let component: ActionInfoDoneComponent;
  let fixture: ComponentFixture<ActionInfoDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInfoDoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInfoDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
