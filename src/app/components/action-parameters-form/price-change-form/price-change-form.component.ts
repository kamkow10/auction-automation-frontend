import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CustomActionParams} from "../../../models/custom-action-params";

@Component({
  selector: 'app-price-change-form',
  templateUrl: './price-change-form.component.html',
  styleUrls: ['./price-change-form.component.scss']
})
export class PriceChangeFormComponent implements OnInit {
  @Output() onSetParams = new EventEmitter<CustomActionParams>();
  public priceChangeOption: 'percentage' | 'constant' = 'percentage';
  public priceChangeTime: string;
  public newPricePercentage: string;
  public newPriceConstant: string;

  constructor() { }

  ngOnInit(): void {
    console.log(new Date().toISOString().slice(0, 16));
    this.priceChangeTime = new Date().toISOString().slice(0, 16);
  }

  public onParamsChanged(): void {
    console.log(this.priceChangeTime)
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
