import {ActionType} from "./action-type";
import {ActionTypeCategory} from "./action-type-category";
import {ActionStatusEnum} from "../enums/action-status.enum";

export class Action {
  public id: number;
  public actionType: ActionType;
  public actionTypeCategory: ActionTypeCategory;
  public actionStatus: ActionStatusEnum;
  public params: any;
  public creationDate: string;
}
