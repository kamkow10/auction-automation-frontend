import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCreatorPageComponent } from './action-creator-page.component';

describe('ActionCreatorPageComponent', () => {
  let component: ActionCreatorPageComponent;
  let fixture: ComponentFixture<ActionCreatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCreatorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCreatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
