import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { FoodItem } from "src/app/shared/models/Food";
import { HomePageService } from '../home-page/home-page.service';
//fix1

const FOOD_ITEM = "Food";
@Injectable({
  providedIn: 'root'
})
export class ProductDetailsPageService {
  constructor(private http: HttpClient,private hs : HomePageService) {}
  getFoodAPI(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(environment.FOODS_URL);
  }
  getFoodByID(id:string): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(environment.FOOD_BY_ID_URL +`${id}`)!;
  }
  getFoodBySearchAPI(name: string): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(
      environment.FOODS_BY_SEARCH_URL + `${name}`
    );
  }
  getListTags(name: string): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(environment.FOODS_BY_TAG_URL + `${name}`);
  }

}
