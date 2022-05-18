import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Shop} from "../../../models/shop";

@Component({
  selector: 'app-connect-shop-page',
  templateUrl: './connect-shop-page.component.html',
  styleUrls: ['./connect-shop-page.component.scss']
})
export class ConnectShopPageComponent implements OnInit {
  public shop: Shop;

  constructor(private route: ActivatedRoute) {
    const shopId = this.route.snapshot.params.id;
    this.shop = {
      id: 1,
      name: 'Ebay',
      logo: ''
    }
  }

  ngOnInit(): void {
  }

}
