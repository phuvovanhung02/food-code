import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { SignupPageComponent } from "./components/pages/signup-page/signup-page.component";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { OrderPageComponent } from "./components/pages/order-page/order-page.component";
import { ProductDetailsPageComponent } from "./components/pages/product-details-page/product-details-page.component";
import { CartPageComponent } from "./components/pages/cart-page/cart-page.component";
import { ProfilePageComponent } from "./components/pages/profile-page/profile-page.component";
import { ProfileChangePasswordComponent } from "./components/pages/profile-change-password/profile-change-password.component";

import { DetailPageComponent } from "./components/pages/product-details-page/detail-page/detail-page.component";
const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "home", component: HomePageComponent },
  { path: "order", component: OrderPageComponent },
  { path: "product-details", component: ProductDetailsPageComponent },
  { path: "cart", component: CartPageComponent },
  { path: "profile", component: ProfilePageComponent },
  { path: "profile/edit", component: ProfileChangePasswordComponent },
  { path: "order", component: OrderPageComponent },
  { path: "foods/:name", component: ProductDetailsPageComponent },
  { path: "cart", component: CartPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
