import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";
import {TimeService} from "../../../services/time.service";

@Component({
  selector: 'app-price-change-form',
  templateUrl: './price-change-form.component.html',
  styleUrls: ['./price-change-form.component.scss']
})
export class PriceChangeFormComponent implements OnInit {
  @Input() params: any;
  @Input() onlyDisplayMode = false;
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public priceChangeOption: 'percentage' | 'constant' = 'percentage';
  public priceChangeTime: string;
  public newPricePercentage: string;
  public newPriceConstant: string;

  constructor() { }

  ngOnInit(): void {
    if (this.params) {
      this.priceChangeTime = this.params.time;
      this.priceChangeOption = this.params.percentage ? 'percentage' : 'constant';
      switch (this.priceChangeOption) {
        case "percentage":
          this.newPricePercentage = this.params.newPrice;
          break;
        case "constant":
          this.newPriceConstant = this.params.newPrice;
          break;
      }
      if (this.onlyDisplayMode) {
        this.params.priceChangeTime = TimeService.convertDatetimeToText(this.params.priceChangeTime);
      }
    } else {
      this.priceChangeTime = TimeService.getCurrentDatetime();
    }
  }

  public onParamsChanged(): void {
    switch (this.priceChangeOption) {
      case "percentage":
        this.onSetParams.emit({
          params: {
            time: this.priceChangeTime,
            newPrice: this.newPricePercentage,
            percentage: true
          },
          setCorrectly: !!this.priceChangeTime && !!this.newPricePercentage
        });
        break;
      case "constant":
        this.onSetParams.emit({
          params: {
            time: this.priceChangeTime,
            newPrice: this.newPriceConstant,
            percentage: true
          },
          setCorrectly: !!this.priceChangeTime && !!this.newPriceConstant
        });
        break;
    }
  }

}
