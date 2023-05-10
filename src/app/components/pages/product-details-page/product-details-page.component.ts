import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from 'src/app/shared/models/Food';
import { ProductDetailsPageService } from './product-details-page.service';
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit{
  @Input() foodItem!: FoodItem;
  
  username: string;
  foodsArray!: Observable<Array<FoodItem>>;
  name : string;
  constructor (private prodcutDetailService : ProductDetailsPageService,private userService: UserService,private activeRoute : ActivatedRoute){
    activeRoute.params.subscribe((params)=>{
      if(params['name'])
      {
        this.foodsArray = prodcutDetailService.getFoodBySearchAPI(params['name']);
        this.name = params['name'];
      }
      
    })
  }
  ngOnInit(): void {
    this.username = this.userService.currentUser.name;
    this.foodsArray = this.prodcutDetailService.getFoodBySearchAPI(this.foodItem.name).pipe((res) => res);
  }
  
  isOverlayHidden = true;
  toggleOverlay() {
    this.isOverlayHidden = !this.isOverlayHidden;
  } 
}
