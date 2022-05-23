import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Shop} from "../models/shop";
import {Offer} from "../models/offer";
import {RestService} from "./rest.service";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private restService: RestService) { }

  public getAllShops(): Observable<{shops: Shop[]}> {
    return this.restService.getAllShops();
  }

  public getConnectedShops(): Observable<{shops: Shop[]}> {
    return this.restService.getConnectedShops();
  }

  public findOffers(shopId: number, titleQuery: string): Observable<{offers: Offer[]}> {
    return this.restService.findOffers(shopId, titleQuery);
  }
}
