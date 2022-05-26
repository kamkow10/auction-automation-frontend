import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-schedule-publishing',
  templateUrl: './schedule-publishing.component.html',
  styleUrls: ['./schedule-publishing.component.scss']
})
export class SchedulePublishingComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public publishTime: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.params) {
      this.publishTime = this.params.time;
      if (this.onlyDisplayMode) {
        this.params.time = TimeService.convertDatetimeToText(this.params.time);
      }
    } else {
      this.publishTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    this.onSetParams.emit({
      params: {
        time: this.publishTime,
      },
      setCorrectly:
        !!this.publishTime
    });
  }
}
