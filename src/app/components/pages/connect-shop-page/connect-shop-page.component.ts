import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Shop} from "../../../models/shop";
import {ShopService} from "../../../services/shop.service";

@Component({
  selector: 'app-connect-shop-page',
  templateUrl: './connect-shop-page.component.html',
  styleUrls: ['./connect-shop-page.component.scss']
})
export class ConnectShopPageComponent implements OnInit {
  public shop: Shop;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private shopService: ShopService) {
  }

  ngOnInit(): void {
    const shopId = this.route.snapshot.params.id;
    this.shopService.getAllShops().subscribe(response => {
      this.shop = response.shops.find(shop => shop.id.toString() === shopId);
    });
  }

  goToShopLoginPage(): void {
    switch (this.shop.name) {
      case 'Allegro':
        this.shopService.getAllegroLoginUrl().subscribe(response => {
          window.open(response.message, '_blank').focus();
        })
        break;
      case 'Ebay':
        this.shopService.getEbayLoginUrl().subscribe(response => {
          window.open(response.message, '_blank').focus();
        })
        break;
    }
  }

  confirmShopLogin(): void {
    switch (this.shop.name) {
      case 'Allegro':
        this.shopService.confirmAllegroLogin().subscribe(response => {
          if (response.message === 'success') {
            this.router.navigateByUrl('shops');
          }
        })
        break;
      case 'Ebay':
        this.shopService.confirmEbayLogin().subscribe(response => {
          if (response.message === 'success') {
            this.router.navigateByUrl('shops');
          }
        })
        break;
    }
  }

}
