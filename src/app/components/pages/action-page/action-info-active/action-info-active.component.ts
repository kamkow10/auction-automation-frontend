import {Component, Input, OnInit} from '@angular/core';
import {Action} from "../../../../models/action";
import {Offer} from "../../../../models/offer";
import {CustomActionParams} from "../../../../models/custom-action-params";
import {ActionCreationData} from "../../../../models/action-creation-data";
import {ActionService} from "../../../../services/action.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-action-info-active',
  templateUrl: './action-info-active.component.html',
  styleUrls: ['./action-info-active.component.scss']
})
export class ActionInfoActiveComponent implements OnInit {
  @Input() action: Action;
  public submitButtonDisabled = false;
  public paramsSetCorrectly = true;

  constructor(private actionService: ActionService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  public editAction(): void {
    const actionCreationData: ActionCreationData = {
      actionTypeId: null,
      params: JSON.stringify(this.action.params),
      selectedOffers: this.action.selectedOffers.map(offer => {
        return {external_offer_id: offer.externalId, shop: offer.shop.name}
      })
    }
    this.actionService.editAction(this.action.id, actionCreationData).subscribe(() => {
      this.ngOnInit();
      window.scroll({top: 0});
    })
  }

  public deleteAction(): void {
    this.actionService.deleteAction(this.action.id).subscribe(() => {
      this.router.navigateByUrl('your-actions');
    })
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
