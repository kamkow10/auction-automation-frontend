import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionInfoPendingComponent } from './action-info-pending.component';

describe('ActionInfoPendingComponent', () => {
  let component: ActionInfoPendingComponent;
  let fixture: ComponentFixture<ActionInfoPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionInfoPendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionInfoPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
