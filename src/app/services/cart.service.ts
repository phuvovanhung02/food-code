import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CartService {
  public placeHolder: any = [];
  public cartItems = new BehaviorSubject([]);

  public cartBadge$ = new BehaviorSubject<number>(0);
  public updateCartBadge$ = new BehaviorSubject<number>(0);

  constructor() {
    const ls = this.getCartData();
    if (ls) this.cartItems.next(ls);
  }

  addToCart(foodItem: any): void {
    const ls = this.getCartData();

    let exist: any;
    if (ls) {
      exist = ls.find((item: any) => {
        return item.id === foodItem.id;
      });
    }
    if (exist) {
      exist.quantity++;
      this.setCartData(ls);
    } else {
      if (ls) {
        const newData = [...ls, foodItem];
        this.setCartData(newData);
      }
      this.placeHolder.push(foodItem);
      this.setCartData(this.placeHolder);
    }
  }

  setCartData(data: any) {
    localStorage.setItem("cart", JSON.stringify(data));
    this.cartItems.next(this.getCartData());
  }

  getCartData() {
    const stringLocal: any = localStorage.getItem("cart");
    return JSON.parse(stringLocal);
  }

  clearCartData() {
    localStorage.removeItem("cart");
    this.cartItems.next([]);
  }
}
