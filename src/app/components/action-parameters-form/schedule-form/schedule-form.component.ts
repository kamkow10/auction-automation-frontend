import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public publishTime: string;
  public unpublishTime: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.params) {
      this.publishTime = this.params.publishTime;
      this.unpublishTime = this.params.unpublishTime;
      if (this.onlyDisplayMode) {
        this.params.publishTime = TimeService.convertDatetimeToText(this.params.publishTime);
        this.params.unpublishTime = TimeService.convertDatetimeToText(this.params.unpublishTime);
      }
    } else {
      this.publishTime = TimeService.getCurrentDatetime();
      this.unpublishTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    this.onSetParams.emit({
      params: {
        publishTime: this.publishTime,
        unpublishTime: this.unpublishTime,
      },
      setCorrectly:
        !!this.publishTime &&
        !!this.unpublishTime
    });
  }

}
