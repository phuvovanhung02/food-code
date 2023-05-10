import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FoodItem } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent {
  @Input() foodItem!: FoodItem;
  @Output() addFood = new EventEmitter();
  constructor(private cartService: CartService) {}
  value!: number;
  value1: number = 5;
  value2: number = 2;
  value3: number = 3;

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
  }
  
}
