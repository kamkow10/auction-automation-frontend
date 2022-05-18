import {Component, OnInit} from '@angular/core';
import {Action} from "../../../models/action";
import {ACTION_STATUS} from "../../../consts/action-status.const";

@Component({
  selector: 'app-your-action-page',
  templateUrl: './your-action-page.component.html',
  styleUrls: ['./your-action-page.component.scss']
})
export class YourActionPageComponent implements OnInit {
  public actions: Action[];

  constructor() {
    this.actions = [
      {id: 12345, actionStatus: ACTION_STATUS.ACTIVE, actionType: {name: 'Price change', id: 1}, actionTypeCategory: {actionTypes: [], name: 'Price change', id: 1}, creationDate: '01-01-2022', params: null, selectedOffers: []},
      {id: 12345, actionStatus: ACTION_STATUS.ACTIVE, actionType: {name: 'Price change', id: 1}, actionTypeCategory: {actionTypes: [], name: 'Price change', id: 1}, creationDate: '01-01-2022', params: null, selectedOffers: []},
      {id: 12345, actionStatus: ACTION_STATUS.DONE, actionType: {name: 'Price change', id: 1}, actionTypeCategory: {actionTypes: [], name: 'Price change', id: 1}, creationDate: '01-01-2022', params: null, selectedOffers: []},
      {id: 12345, actionStatus: ACTION_STATUS.PENDING, actionType: {name: 'Price change', id: 1}, actionTypeCategory: {actionTypes: [], name: 'Price change', id: 1}, creationDate: '01-01-2022', params: null, selectedOffers: []},
      {id: 12345, actionStatus: ACTION_STATUS.FAILED, actionType: {name: 'Price change', id: 1}, actionTypeCategory: {actionTypes: [], name: 'Price change', id: 1}, creationDate: '01-01-2022', params: null, selectedOffers: []},
      {id: 12345, actionStatus: ACTION_STATUS.PENDING, actionType: {name: 'Price change', id: 1}, actionTypeCategory: {actionTypes: [], name: 'Price change', id: 1}, creationDate: '01-01-2022', params: null, selectedOffers: []},
    ]
  }

  ngOnInit(): void {
  }

}
