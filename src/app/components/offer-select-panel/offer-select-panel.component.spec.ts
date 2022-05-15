import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSelectPanelComponent } from './offer-select-panel.component';

describe('OfferSelectPanelComponent', () => {
  let component: OfferSelectPanelComponent;
  let fixture: ComponentFixture<OfferSelectPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferSelectPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSelectPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
