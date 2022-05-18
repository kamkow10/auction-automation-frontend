import {Component, Input, OnInit} from '@angular/core';
import {Action} from "../../../../models/action";
import {Offer} from "../../../../models/offer";
import {CustomActionParams} from "../../../../models/custom-action-params";

@Component({
  selector: 'app-action-info-active',
  templateUrl: './action-info-active.component.html',
  styleUrls: ['./action-info-active.component.scss']
})
export class ActionInfoActiveComponent implements OnInit {
  @Input() action: Action;
  public submitButtonDisabled = false;
  public paramsSetCorrectly = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  public editAction(): void {
    console.log('edit creation')
  }

  public deleteAction(): void {
    console.log('delete creation')
  }

  public onOfferListSet(offers: Offer[]): void {
    this.action.selectedOffers = offers;
    this.validate();
  }

  public onParamsSet(customActionParams: CustomActionParams): void {
    this.action.params = customActionParams.params;
    this.paramsSetCorrectly = customActionParams.setCorrectly;
    this.validate();
  }

  private validate(): void {
    this.submitButtonDisabled = this.action.selectedOffers.length === 0 || !this.paramsSetCorrectly;
  }

}
