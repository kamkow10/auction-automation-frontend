import { Component, OnInit } from '@angular/core';
import {Shop} from "../../../models/shop";

@Component({
  selector: 'app-shops-page',
  templateUrl: './shops-page.component.html',
  styleUrls: ['./shops-page.component.scss']
})
export class ShopsPageComponent implements OnInit {
  public notConnectedShops: Shop[];
  public connectedShops: Shop[];

  constructor() { }

  ngOnInit(): void {
    this.connectedShops = [
      {id: 1, logo: '', name: 'Allegro'}
    ]
    this.notConnectedShops = [
      {id: 1, logo: '', name: 'Allegro'},
      {id: 2, logo: '', name: 'Ebay'},
      {id: 3, logo: '', name: 'Shop3'},
      {id: 4, logo: '', name: 'Shop4'},
      {id: 5, logo: '', name: 'Shop5'},
      {id: 6, logo: '', name: 'Shop6'},
      {id: 7, logo: '', name: 'Shop7'},
      {id: 8, logo: '', name: 'Shop8'},
      {id: 9, logo: '', name: 'Shop9'},
    ]
    this.notConnectedShops = this.notConnectedShops.filter(notConnectedShop => {
      return !this.connectedShops.some(connectedShop => connectedShop.id === notConnectedShop.id);
    });
  }

}
