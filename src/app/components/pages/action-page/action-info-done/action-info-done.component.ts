import {Component, Input, OnInit} from '@angular/core';
import {Action} from "../../../../models/action";
import {Shop} from "../../../../models/shop";
import {Offer} from "../../../../models/offer";

@Component({
  selector: 'app-action-info-done',
  templateUrl: './action-info-done.component.html',
  styleUrls: ['./action-info-done.component.scss']
})
export class ActionInfoDoneComponent implements OnInit {
  @Input() action: Action;
  public shopsWithOffers: {shop: Shop, offers: Offer[]}[];

  constructor() { }

  ngOnInit(): void {
    this.shopsWithOffers = this.getShopsWithOffers();
  }

  private getShopsWithOffers(): {shop: Shop, offers: Offer[]}[] {
    const offers = this.action.selectedOffers;
    let shops: Shop[] = [];
    shops = offers.map(offer => offer.shop);
    let uniqueShops = [...new Map(shops.map(shop => [shop.id, shop])).values()];
    let result: {shop: Shop, offers: Offer[]}[] = [];
    uniqueShops.forEach(shop => {
      result.push({shop: shop, offers: []});
      offers.forEach(offer => {
        if (offer.shop.id === shop.id) {
          result.find(v => v.shop.id === shop.id).offers.push(offer);
        }
      })
    })
    return result;
  }

}
