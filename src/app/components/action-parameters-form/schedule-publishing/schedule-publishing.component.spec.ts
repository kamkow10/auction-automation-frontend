import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulePublishingComponent } from './schedule-publishing.component';

describe('SchedulePublishingComponent', () => {
  let component: SchedulePublishingComponent;
  let fixture: ComponentFixture<SchedulePublishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulePublishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulePublishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
