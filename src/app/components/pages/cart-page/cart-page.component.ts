import { Component, OnInit } from "@angular/core";

import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  products!: Array<any>;
  totalPrice: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.cartService.getCartData();
    this.totalPrice = 0;
    this.products.forEach((item) => {
      item.total = item.price * item.quantity;
      this.totalPrice += item.total;
    });
  }

  removeItem(item: any) {
    this.products.splice(item, 1);

    this.cartService.setCartData(this.products);
    this.cartService.updateCartBadge$.next(this.products.length);
  }

  updateTotalPrice() {
    this.totalPrice = 0;
    this.products.forEach((item) => {
      item.total = item.price * item.quantity;
      this.totalPrice += item.total;
    });
    this.cartService.setCartData(this.products);
  }
}
