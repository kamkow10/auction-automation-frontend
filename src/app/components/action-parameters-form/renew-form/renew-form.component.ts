import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-renew-form',
  templateUrl: './renew-form.component.html',
  styleUrls: ['./renew-form.component.scss']
})
export class RenewFormComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public renewTime: string;

  constructor() {
  }

  ngOnInit(): void {
    if (this.params) {
      this.renewTime = this.params.time;
      if (this.onlyDisplayMode) {
        this.params.time = TimeService.convertDatetimeToText(this.params.time);
      }
    } else {
      this.renewTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    this.onSetParams.emit({
      params: {
        time: this.renewTime
      },
      setCorrectly:
        !!this.renewTime
    });
  }
}
