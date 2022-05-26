import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-clone-form',
  templateUrl: './clone-form.component.html',
  styleUrls: ['./clone-form.component.scss']
})
export class CloneFormComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public cloneTime: string;
  public cloneCount: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.params) {
      this.cloneTime = this.params.time;
      this.cloneCount = this.params.count;
      if (this.onlyDisplayMode) {
        this.params.time = TimeService.convertDatetimeToText(this.params.time);
      }
    } else {
      this.cloneTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    this.onSetParams.emit({
      params: {
        time: this.cloneTime,
        count: this.cloneCount
      },
      setCorrectly:
        !!this.cloneTime &&
        !!this.cloneCount
    });
  }
}
