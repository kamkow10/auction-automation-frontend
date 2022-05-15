import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from "../../models/offer";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Shop} from "../../models/shop";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-offer-select-panel',
  templateUrl: './offer-select-panel.component.html',
  styleUrls: ['./offer-select-panel.component.scss']
})
export class OfferSelectPanelComponent implements OnInit {
  @Output() onOfferListChange = new EventEmitter<Offer[]>();
  @Input() selectedOffers: Offer[] = [];
  public foundedOffers: Offer[] = [];
  public showFoundedOffers = false;
  public searchShopForm: FormGroup;
  public shops: Shop[] = [
    {id: 1, logo: '', name: 'Allegro'},
    {id: 1, logo: '', name: 'Ebay'}
  ]

  constructor(private fb: FormBuilder) {
    this.searchShopForm = this.fb.group({
      shop: [this.shops[0].id],
      timeFrom: [formatDate(OfferSelectPanelComponent.getDateMonthsAgoFromNow(1), 'yyyy-MM-dd', 'en')],
      timeTo: [formatDate(new Date(), 'yyyy-MM-dd', 'en')],
      title: ['']
    })
  }

  ngOnInit(): void {
  }

  get title(): AbstractControl {
    return this.searchShopForm.get('title');
  }

  public search(): void {
    this.showFoundedOffers = true;
    const dummyFoundedOffers = [
      {title: 'Tytuł', id: 1, amount: 50, price: 100, image: '', shop: {name: 'Allegro', logo: '', id: 1}},
      {title: 'Tytuł', id: 2, amount: 50, price: 100, image: '', shop: {name: 'Allegro', logo: '', id: 1}},
      {title: 'Tytuł', id: 3, amount: 50, price: 100, image: '', shop: {name: 'Allegro', logo: '', id: 1}},
    ];
    this.foundedOffers = dummyFoundedOffers.filter(offer => {
      return !this.selectedOffers.some(selectedOffer => selectedOffer.id === offer.id && selectedOffer.shop.id === offer.shop.id);
    });
  }


  public onSelectOffer(offer: Offer): void {
    this.foundedOffers = this.foundedOffers.filter(foundedOffer => foundedOffer.id != offer.id);
    this.selectedOffers.push(offer);
    this.onOfferListChange.emit(this.selectedOffers);
  }

  public onDeleteOffer(offer: Offer): void {
    this.selectedOffers = this.selectedOffers.filter(selectedOffer => selectedOffer.id != offer.id);
    this.onOfferListChange.emit(this.selectedOffers);
  }

  private static getDateMonthsAgoFromNow(months: number): Date  {
    const dateMonthsAgo = new Date();
    dateMonthsAgo.setMonth(dateMonthsAgo.getMonth() - months);
    return dateMonthsAgo;
  }

}
