import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, tap } from "rxjs";
// import { USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from "../shared/interfaces/IUserLogin";
import { IUserRegister } from "../shared/interfaces/IUserRegister";
import { User } from "../shared/models/User";
import { environment } from "src/environments/environment";

const USER_KEY = "User";
@Injectable({
  providedIn: "root",
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;
  isLoading$: any;

  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser(): User {
    return this.userSubject.value;
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(environment.USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
        },
        error: (errorResponse) => {},
      })
    );
  }

  register(userRegiser: IUserRegister): Observable<User> {
    return this.http
      .post<User>(environment.USER_REGISTER_URL, userRegiser)
      .pipe(
        tap({
          next: (user) => {
            this.setUserToLocalStorage(user);
            this.userSubject.next(user);
          },
          error: (errorResponse) => {},
        })
      );
  }

  getProfile(id: string) {
    const data: any = localStorage.getItem("userInfo");
    const { token } = JSON.parse(data);
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http
      .get(environment.USER_GET_PROFILE_URL + `${id}`, { headers: headers })
      .toPromise();
  }

  updateProfile(id: string, userProfile: User) {
    const data: any = localStorage.getItem("userInfo");
    const { token } = JSON.parse(data);
    const headers = new HttpHeaders().set("Authorization", `Bearer ${token}`);
    return this.http
      .put(environment.USER_UPDATE_URL + `${id}`, userProfile, {
        headers: headers,
      })
      .toPromise();
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("User");
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

  async createOrder(listProduct: any): Promise<any> {
    const user = this.currentUser;
    try {
      const headers = {
        access_token: user.token,
      };

      const response = await this.http
        .post(environment.ORDER_CREATE_URL, listProduct, { headers })
        .toPromise();

      return response;
    } catch (error) {
      throw new Error("Error !!!");
    }
  }
}
