import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActionCreatorPageComponent} from "./components/pages/action-creator-page/action-creator-page.component";
import {ShopsPageComponent} from "./components/pages/shops-page/shops-page.component";
import {YourActionPageComponent} from "./components/pages/your-action-page/your-action-page.component";
import {ActionPageComponent} from "./components/pages/action-page/action-page.component";
import {ConnectShopPageComponent} from "./components/pages/connect-shop-page/connect-shop-page.component";

const routes: Routes = [
  {path: 'action-creator', component: ActionCreatorPageComponent},
  {path: 'your-actions', component: YourActionPageComponent},
  {path: 'shops', component: ShopsPageComponent},
  {path: 'action/:id', component: ActionPageComponent},
  {path: 'shop/:id', component: ConnectShopPageComponent},
  {path: '**', redirectTo: "action-creator"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
