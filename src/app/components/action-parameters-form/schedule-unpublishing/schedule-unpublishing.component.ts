import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-schedule-unpublishing',
  templateUrl: './schedule-unpublishing.component.html',
  styleUrls: ['./schedule-unpublishing.component.scss']
})
export class ScheduleUnpublishingComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public unpublishTime: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.params) {
      this.unpublishTime = this.params.time;
      if (this.onlyDisplayMode) {
        this.params.time = TimeService.convertDatetimeToText(this.params.time);
      }
    } else {
      this.unpublishTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    this.onSetParams.emit({
      params: {
        time: this.unpublishTime,
      },
      setCorrectly:
        !!this.unpublishTime
    });
  }
}
