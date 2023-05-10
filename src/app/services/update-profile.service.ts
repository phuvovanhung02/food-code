import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UpdateProfileService {
  constructor() {}

  // changePassword(data){
  //   var headers = new HttpHeaders()
  //     .set('Authorization', 'Token ' + localStorage.getItem('usertoken'));

  //   var options =  {
  //       headers: headers
  //   };
  //   return this.httpClient
  //     .patch('/api/auth/change_password/',data, options)
  // }
}
