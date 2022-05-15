import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ActionCreatorPageComponent } from './components/pages/action-creator-page/action-creator-page.component';
import { YourActionPageComponent } from './components/pages/your-action-page/your-action-page.component';
import { ShopsPageComponent } from './components/pages/shops-page/shops-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OfferSelectPanelComponent } from './components/offer-select-panel/offer-select-panel.component';
import { OfferTileComponent } from './components/offer-tile/offer-tile.component';
import { ActionParametersFormComponent } from './components/action-parameters-form/action-parameters-form.component';
import { PriceChangeFormComponent } from './components/action-parameters-form/price-change-form/price-change-form.component';
import { FakePromotionFormComponent } from './components/action-parameters-form/fake-promotion-form/fake-promotion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ActionCreatorPageComponent,
    YourActionPageComponent,
    ShopsPageComponent,
    OfferSelectPanelComponent,
    OfferTileComponent,
    ActionParametersFormComponent,
    PriceChangeFormComponent,
    FakePromotionFormComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
