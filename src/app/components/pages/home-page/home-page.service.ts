import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { FoodItem } from "src/app/shared/models/Food";
import { UserService } from "src/app/services/user.service";
import { OnInit } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HomePageService {
  constructor(private http: HttpClient, private userService: UserService) {}

  getFoodAPI(): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(environment.FOODS_URL);
  }

  getListTags(tag: string): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(environment.FOODS_BY_TAG_URL + `${tag}`);
  }

  getFoodBySearchAPI(name: string): Observable<FoodItem[]> {
    return this.http.get<FoodItem[]>(
      environment.FOODS_BY_SEARCH_URL + `${name}`
    );
  }


  ngOnInit(): void {}
}
