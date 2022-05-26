import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleUnpublishingComponent } from './schedule-unpublishing.component';

describe('ScheduleUnpublishingComponent', () => {
  let component: ScheduleUnpublishingComponent;
  let fixture: ComponentFixture<ScheduleUnpublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleUnpublishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleUnpublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
