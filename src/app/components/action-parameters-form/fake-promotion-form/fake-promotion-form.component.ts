import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-fake-promotion-form',
  templateUrl: './fake-promotion-form.component.html',
  styleUrls: ['./fake-promotion-form.component.scss']
})
export class FakePromotionFormComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public priceIncreaseTime: string;
  public priceIncreasePercent: number;
  public fakePromotionTime: string;
  public fakePromotionPercent: number;

  constructor() {
  }

  ngOnInit(): void {
    if (this.params) {
      this.priceIncreaseTime = this.params.priceIncreaseTime;
      this.priceIncreasePercent = this.params.priceIncreasePercent;
      this.fakePromotionTime = this.params.fakePromotionTime;
      this.fakePromotionPercent = this.params.fakePromotionPercent;
      if (this.onlyDisplayMode) {
        this.params.priceIncreaseTime = TimeService.convertDatetimeToText(this.params.priceIncreaseTime);
        this.params.fakePromotionTime = TimeService.convertDatetimeToText(this.params.fakePromotionTime);
      }
    } else {
      this.priceIncreaseTime = TimeService.getCurrentDatetime();
      this.fakePromotionTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    this.onSetParams.emit({
      params: {
        priceIncreaseTime: this.priceIncreaseTime,
        priceIncreasePercent: this.priceIncreasePercent,
        fakePromotionTime: this.fakePromotionTime,
        fakePromotionPercent: this.fakePromotionPercent
      },
      setCorrectly:
        !!this.priceIncreaseTime &&
        !!this.priceIncreasePercent &&
        !!this.fakePromotionTime &&
        !!this.fakePromotionPercent
    });
  }

}
