import {ActionType} from "./action-type";
import {ActionTypeCategory} from "./action-type-category";
import {Offer} from "./offer";

export class Action {
  public id: number;
  public actionType: ActionType;
  public actionTypeCategory: ActionTypeCategory;
  public actionStatus: string;
  public params: any;
  public creationDate: string;
  public selectedOffers: Offer[];
}
