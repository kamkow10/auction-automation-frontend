import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Offer} from "../../models/offer";

@Component({
  selector: 'app-offer-tile',
  templateUrl: './offer-tile.component.html',
  styleUrls: ['./offer-tile.component.scss']
})
export class OfferTileComponent implements OnInit {
  @Input() offer: Offer;
  @Input() tileStyle: 'default' | 'selected' | 'error' = 'default';
  @Input() showDeleteButton = false;
  @Input() clickAvailabe = false;

  @Output() onClick = new EventEmitter<Offer>();
  @Output() onDelete = new EventEmitter<Offer>();

  constructor() { }

  ngOnInit(): void {
  }

  public onOfferClicked(): void {
    if (this.clickAvailabe) {
      this.onClick.emit(this.offer);
    }
  }

  public onDeleteOfferClicked(): void {
    this.onDelete.emit(this.offer);
  }

}
