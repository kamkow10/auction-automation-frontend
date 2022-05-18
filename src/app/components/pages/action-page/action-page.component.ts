import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Action} from "../../../models/action";
import {ACTION_STATUS} from "../../../consts/action-status.const";

@Component({
  selector: 'app-action-page',
  templateUrl: './action-page.component.html',
  styleUrls: ['./action-page.component.scss']
})
export class ActionPageComponent implements OnInit {
  public action: Action;
  public ACTION_STATUS = ACTION_STATUS;

  constructor(private route: ActivatedRoute) {
    const actionId = this.route.snapshot.params.id;
    this.action = {
      id: 12345,
      actionStatus: ACTION_STATUS.ACTIVE,
      actionType: {
        name: 'Price change',
        id: 1
      },
      actionTypeCategory: {
        actionTypes: [],
        name: 'Price change',
        id: 1
      },
      creationDate: '01-01-2022',
      params: {
        time: '2022-10-05T14:48:00',
        newPrice: '100',
        percentage: false
      },
      selectedOffers: [
        {title: 'Tytuł', id: 2, amount: 50, price: 100, image: '', shop: {name: 'Allegro', logo: '', id: 1}},
        {title: 'Tytuł', id: 34235, amount: 50, price: 100, image: '', shop: {name: 'Allegro', logo: '', id: 1}},
        {title: 'Tytuł', id: 356, amount: 50, price: 100, image: '', shop: {name: 'Ebay', logo: '', id: 2}},
        {title: 'Tytuł', id: 36235, amount: 50, price: 100, image: '', shop: {name: 'Allegro', logo: '', id: 1}},
        {title: 'Tytuł', id: 2333, amount: 50, price: 100, image: '', shop: {name: 'Ebay', logo: '', id: 2}},
      ]
    };
  }

  ngOnInit(): void {
  }

}
