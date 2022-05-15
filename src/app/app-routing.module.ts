import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActionCreatorPageComponent} from "./components/pages/action-creator-page/action-creator-page.component";
import {ShopsPageComponent} from "./components/pages/shops-page/shops-page.component";

const routes: Routes = [
  {path: 'action-creator', component: ActionCreatorPageComponent},
  {path: 'shops', component: ShopsPageComponent},
  {path: '**', redirectTo: "action-creator"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
