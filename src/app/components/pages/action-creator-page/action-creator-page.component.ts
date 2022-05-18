import {Component, OnInit} from '@angular/core';
import {ActionTypeCategory} from "../../../models/action-type-category";
import {FormBuilder} from "@angular/forms";
import {CustomActionParams} from "../../../models/custom-action-params";
import {Offer} from "../../../models/offer";

@Component({
  selector: 'app-action-creator-page',
  templateUrl: './action-creator-page.component.html',
  styleUrls: ['./action-creator-page.component.scss']
})
export class ActionCreatorPageComponent implements OnInit {
  public selectedActionTypeId: number;
  public selectedOffers: Offer[] = [];
  public customActionParams: CustomActionParams;
  public actionTypeCategories: ActionTypeCategory[];
  public submitButtonDisabled = true;

  constructor(private fb: FormBuilder) {
    this.actionTypeCategories = [
      {
        name: 'Price manipulation',
        id: 1,
        actionTypes: [
          {name: 'Change price', id: 1},
          {name: 'Fake promotion', id: 2}
        ]
      },
    ]
  }

  ngOnInit(): void {
    this.customActionParams = new CustomActionParams(null, false);
  }

  public createAction(): void {
    console.log('action creation')
  }

  public onActionTypeSet(): void {
    this.customActionParams = new CustomActionParams(null, false);
    this.validate();
  }

  public onOfferListSet(offers: Offer[]): void {
    this.selectedOffers = offers;
    this.validate();
  }

  public onParamsSet(customActionParams: CustomActionParams): void {
    this.customActionParams = customActionParams;
    this.validate();
  }

  private validate(): void {
    this.submitButtonDisabled =
      !this.customActionParams.setCorrectly ||
      !this.selectedActionTypeId ||
      this.selectedOffers.length === 0;
  }

}
