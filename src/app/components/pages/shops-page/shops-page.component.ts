import { Component, OnInit } from '@angular/core';
import {Shop} from "../../../models/shop";
import {ShopService} from "../../../services/shop.service";

@Component({
  selector: 'app-shops-page',
  templateUrl: './shops-page.component.html',
  styleUrls: ['./shops-page.component.scss']
})
export class ShopsPageComponent implements OnInit {
  public notConnectedShops: Shop[];
  public connectedShops: Shop[];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getConnectedShops().subscribe(response => {
      this.connectedShops = response.shops;
      this.shopService.getAllShops().subscribe(response => {
        this.notConnectedShops = response.shops;
        this.notConnectedShops = this.notConnectedShops.filter(notConnectedShop => {
          return !this.connectedShops.some(connectedShop => connectedShop.id === notConnectedShop.id);
        });
      })
    })
  }

}
