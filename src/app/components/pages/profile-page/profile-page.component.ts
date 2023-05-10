import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

import { HomePageService } from "../home-page/home-page.service";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/shared/models/User";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.css"],
  providers: [MessageService],
})
export class ProfilePageComponent implements OnInit {
  isReadonly = true;
  isOverlayHidden = true;
  username: string;

  toggleReadonly() {
    this.isReadonly = !this.isReadonly;
  }

  profileForm = new FormGroup({
    email: new FormControl(""),
    name: new FormControl(""),
    password: new FormControl(""),
    confirmPassword: new FormControl(""),
    address: new FormControl(""),
  });

  constructor(
    private userService: UserService,
    private homePageService: HomePageService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.username = this.userService.currentUser.name;
    // this.useraddress = this.userService.currentUser.address;

    const data: any = localStorage.getItem("User");
    this.profileForm.patchValue({
      email: JSON.parse(data).email,
      name: JSON.parse(data).name,
      address: JSON.parse(data).address,
    });
    this.profileForm.valueChanges.subscribe();
  }

  saveProfile() {
    const data: any = localStorage.getItem("userInfo");
    const userId = JSON.parse(data).id;
    const userData: any = this.profileForm.value;
    this.userService.updateProfile(userId, userData).then((res) => {
      console.log(res);
    });
    console.log(userId, userData);
  }

  toggleOverlay() {
    this.isOverlayHidden = !this.isOverlayHidden;
  }

  show() {
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: "Saved Profile Successful",
    });
  }
}
