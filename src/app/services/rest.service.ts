import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {
  BACKEND_URL,
  CREATE_ACTION_URL,
  DELETE_ACTION_URL,
  EDIT_ACTION_URL,
  FIND_OFFER_URL,
  GET_ACTION_TYPE_CATEGORIES_URL,
  GET_ACTION_URL,
  GET_ACTIONS_URL,
  GET_ALL_SHOPS_URL,
  GET_CONNECTED_SHOPS_URL,
  GET_USER_DATA_URL,
  LOGIN_URL, LOGOUT_URL, REGISTER_URL
} from "../consts/url.const";
import {Observable} from "rxjs";
import {UserData} from "../models/user-data";
import {Shop} from "../models/shop";
import {Offer} from "../models/offer";
import {ActionCreationData} from "../models/action-creation-data";
import {Action} from "../models/action";
import {ActionTypeCategory} from "../models/action-type-category";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {
  }

  public login(loginData: UserData): Observable<{token: string}> {
    return this.http.post<{token: string}>(LOGIN_URL, loginData);
  }

  public register(registerData: UserData): Observable<any> {
    return this.http.post<any>(REGISTER_URL, registerData);
  }

  public logout(): Observable<any> {
    return this.http.post<any>(LOGOUT_URL, null);
  }

  public getUserData(): Observable<UserData> {
    return this.http.get<UserData>(GET_USER_DATA_URL)
  }

  public getAllShops(): Observable<{shops: Shop[]}> {
    return this.http.get<{shops: Shop[]}>(GET_ALL_SHOPS_URL);
  }

  public getConnectedShops(): Observable<{shops: Shop[]}> {
    return this.http.get<{shops: Shop[]}>(GET_CONNECTED_SHOPS_URL);
  }

  public findOffers(shopId: number, titleQuery: string): Observable<{offers: Offer[]}> {
    return this.http.post<{offers: Offer[]}>(FIND_OFFER_URL, {shopId, titleQuery});
  }

  public createAction(actionCreationData: ActionCreationData): Observable<{action: Action[]}> {
    return this.http.post<{action: Action[]}>(CREATE_ACTION_URL, actionCreationData);
  }

  public getActions(): Observable<{actions: Action[]}> {
    return this.http.get<{actions: Action[]}>(GET_ACTIONS_URL);
  }

  public getAction(id: number): Observable<{action: Action}> {
    return this.http.get<{action: Action}>(GET_ACTION_URL + `/${id}`);
  }

  public editAction(id: number, actionCreationData: ActionCreationData): Observable<any> {
    return this.http.put<any>(EDIT_ACTION_URL + `/${id}`, actionCreationData);
  }

  public deleteAction(id: number): Observable<any> {
    return this.http.delete<any>(DELETE_ACTION_URL + `/${id}`);
  }

  public getActionTypeCategories(): Observable<{actionTypeCategories: ActionTypeCategory[]}> {
    return this.http.get<{actionTypeCategories: ActionTypeCategory[]}>(GET_ACTION_TYPE_CATEGORIES_URL);
  }
}
