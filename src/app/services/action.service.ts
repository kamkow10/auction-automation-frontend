import {Injectable} from '@angular/core';
import {RestService} from "./rest.service";
import {ActionCreationData} from "../models/action-creation-data";
import {Observable} from "rxjs";
import {Action} from "../models/action";
import {ActionTypeCategory} from "../models/action-type-category";

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private restService: RestService) { }

  public createAction(actionCreationData: ActionCreationData): Observable<{action: Action[]}> {
    return this.restService.createAction(actionCreationData);
  }

  public getActions(): Observable<{actions: Action[]}> {
    return this.restService.getActions();
  }

  public getAction(id: number): Observable<{action: Action}> {
    return this.restService.getAction(id);
  }

  public editAction(id: number, actionCreationData: ActionCreationData): Observable<any> {
    return this.restService.editAction(id, actionCreationData);
  }

  public deleteAction(id: number): Observable<any> {
    return this.restService.deleteAction(id);
  }

  public getActionTypeCategories(): Observable<{actionTypeCategories: ActionTypeCategory[]}> {
    return this.restService.getActionTypeCategories();
  }
}
