import { Component, EventEmitter, Input, Output } from "@angular/core";
import { HomePageService } from "./home-page.service";
import { FoodItem, Foods } from "src/app/shared/models/Food";
import { BehaviorSubject, Observable } from "rxjs";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent {
  @Output() addFood = new EventEmitter();
  foodsArray!: Observable<Array<FoodItem>>;
  valueChange: string = "";
  foods: any[];

  constructor(private homePageService: HomePageService) {}

  ngOnInit(): void {
    this.foodsArray = this.homePageService.getFoodAPI().pipe((res) => res);
  }
  handleFilterTags(type: string) {
    //
    if (type === "All") {
      this.foodsArray = this.homePageService.getFoodAPI().pipe((res) => res);
    } else {
      this.foodsArray = this.homePageService
        .getListTags(type)
        .pipe((res) => res);
    }
  }

  changeInputSearch(event: any) {
    this.valueChange = event.target.value;
  }

  handleSearchItemByName() {
    if (this.valueChange === "") {
      this.foodsArray = this.homePageService.getFoodAPI().pipe((res) => res);
    } else {
      this.foodsArray = this.homePageService
        .getFoodBySearchAPI(this.valueChange)
        .pipe((res) => res);
    }
  }

  addFoodToCart(event: any) {
    this.addFood.emit(event);
  }
}
