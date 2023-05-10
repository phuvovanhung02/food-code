import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { FoodItem } from "src/app/shared/models/Food";
import { CartService } from "src/app/services/cart.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  @Input() foodItem!: FoodItem;
  @Output() addFood = new EventEmitter();

  constructor(private cartService: CartService) {}

  ngOnInit() {
    // this.cartService.getCartData().forEach((element: any) => {
    //   this.cartBadge$ += element.quantity;
    // });\
  }

  addToCart(item: FoodItem) {
    const {
      cookTime,
      createdAt,
      favorite,
      id,
      imageUrl,
      name,
      origins,
      price,
      stars,
      tags,
      updatedAt,
      _id,
    } = item;
    const newProduct = {
      quantity: 1,
      cookTime,
      createdAt,
      favorite,
      id,
      imageUrl,
      name,
      origins,
      price,
      stars,
      tags,
      updatedAt,
      _id,
    };
    this.cartService.addToCart(newProduct);
    this.cartService.cartBadge$.next(this.cartService.getCartData().length);
  }

  foodsArray!: Observable<Array<FoodItem>>;
}
