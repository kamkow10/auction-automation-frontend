import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ActionCreatorPageComponent} from './components/pages/action-creator-page/action-creator-page.component';
import {YourActionPageComponent} from './components/pages/your-action-page/your-action-page.component';
import {ShopsPageComponent} from './components/pages/shops-page/shops-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OfferSelectPanelComponent} from './components/offer-select-panel/offer-select-panel.component';
import {OfferTileComponent} from './components/offer-tile/offer-tile.component';
import {ActionParametersFormComponent} from './components/action-parameters-form/action-parameters-form.component';
import {PriceChangeFormComponent} from './components/action-parameters-form/price-change-form/price-change-form.component';
import {FakePromotionFormComponent} from './components/action-parameters-form/fake-promotion-form/fake-promotion-form.component';
import {ActionPageComponent} from './components/pages/action-page/action-page.component';
import {ActionInfoActiveComponent} from './components/pages/action-page/action-info-active/action-info-active.component';
import {ActionInfoDoneComponent} from './components/pages/action-page/action-info-done/action-info-done.component';
import {ActionInfoFailedComponent} from './components/pages/action-page/action-info-failed/action-info-failed.component';
import {ActionInfoPendingComponent} from './components/pages/action-page/action-info-pending/action-info-pending.component';
import {ConnectShopPageComponent} from './components/pages/connect-shop-page/connect-shop-page.component';
import {LoginPageComponent} from './components/pages/login-page/login-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import { ScheduleFormComponent } from './components/action-parameters-form/schedule-form/schedule-form.component';
import { SchedulePublishingComponent } from './components/action-parameters-form/schedule-publishing/schedule-publishing.component';
import { ScheduleUnpublishingComponent } from './components/action-parameters-form/schedule-unpublishing/schedule-unpublishing.component';
import { CloneFormComponent } from './components/action-parameters-form/clone-form/clone-form.component';
import { RenewFormComponent } from './components/action-parameters-form/renew-form/renew-form.component';

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
    ActionPageComponent,
    ActionInfoActiveComponent,
    ActionInfoDoneComponent,
    ActionInfoFailedComponent,
    ActionInfoPendingComponent,
    ConnectShopPageComponent,
    LoginPageComponent,
    ScheduleFormComponent,
    SchedulePublishingComponent,
    ScheduleUnpublishingComponent,
    CloneFormComponent,
    RenewFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
