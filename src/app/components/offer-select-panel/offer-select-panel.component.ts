import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Offer} from "../../models/offer";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {Shop} from "../../models/shop";
import {formatDate} from "@angular/common";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-offer-select-panel',
  templateUrl: './offer-select-panel.component.html',
  styleUrls: ['./offer-select-panel.component.scss']
})
export class OfferSelectPanelComponent implements OnInit {
  @Output() onOfferListChange = new EventEmitter<Offer[]>();
  @Input() offerIdsWithCategoryError: string[] = [];
  @Input() selectedOffers: Offer[] = [];
  public foundedOffers: Offer[] = [];
  public showFoundedOffers = false;
  public searchShopForm: FormGroup;
  public shops: Shop[];

  constructor(private fb: FormBuilder,
              private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.searchShopForm = this.fb.group({
      shopId: [],
      title: ['']
    });
    this.shopService.getConnectedShops().subscribe(response => {
      this.shops = response.shops;
      if (this.shops.length > 0) {
        this.shopId.setValue(this.shops[0].id);
      }
    })
  }

  get title(): AbstractControl {
    return this.searchShopForm.get('title');
  }

  get shopId(): AbstractControl {
    return this.searchShopForm.get('shopId');
  }

  public search(): void {
    this.shopService.findOffers(this.shopId.value, this.title.value).subscribe(response => {
      this.foundedOffers = this.getNotSelectedOffers(response.offers);
      this.showFoundedOffers = true;
    })
  }

  public onSelectOffer(offer: Offer): void {
    this.foundedOffers = this.foundedOffers.filter(foundedOffer => foundedOffer.externalId != offer.externalId);
    this.selectedOffers.push(offer);
    this.onOfferListChange.emit(this.selectedOffers);
  }

  public onDeleteOffer(offer: Offer): void {
    this.selectedOffers = this.selectedOffers.filter(selectedOffer => selectedOffer.externalId != offer.externalId);
    this.onOfferListChange.emit(this.selectedOffers);
  }

  public isAnySelectedOfferWithCategoryError(): boolean {
    return this.selectedOffers.some(offer => this.offerIdsWithCategoryError.includes(offer.externalId));
  }

  private getNotSelectedOffers(offers: Offer[]): Offer[] {
    return offers.filter(offer => {
      return !this.selectedOffers.some(selectedOffer => selectedOffer.externalId === offer.externalId && selectedOffer.shop.id === offer.shop.id);
    });
  }
}
