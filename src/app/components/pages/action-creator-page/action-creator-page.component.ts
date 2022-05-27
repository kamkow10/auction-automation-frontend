import {Component, OnInit} from '@angular/core';
import {ActionTypeCategory} from "../../../models/action-type-category";
import {FormBuilder} from "@angular/forms";
import {CustomActionParams} from "../../../models/custom-action-params";
import {Offer} from "../../../models/offer";
import {ActionService} from "../../../services/action.service";
import {ActionCreationData} from "../../../models/action-creation-data";
import {Router} from "@angular/router";

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
  public offerIdsWithCategoryError = [];

  constructor(private fb: FormBuilder,
              private actionService: ActionService,
              private router: Router) {
    this.actionService.getActionTypeCategories().subscribe(response => {
      this.actionTypeCategories = response.actionTypeCategories;
    })
  }

  ngOnInit(): void {
    this.customActionParams = new CustomActionParams(null, false);
  }

  public createAction(): void {
    const actionCreationData: ActionCreationData = {
      actionTypeId: this.selectedActionTypeId,
      params: JSON.stringify(this.customActionParams.params),
      selectedOffers: this.selectedOffers.map(offer => {
        return {external_offer_id: offer.externalId, shop: offer.shop.name}
      })
    }
    this.actionService.createAction(actionCreationData).subscribe(response => {
      this.router.navigateByUrl(`action/${response.action[0].id}`);
    }, error => {
      this.offerIdsWithCategoryError = error.error.wrongOffers;
    })
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
