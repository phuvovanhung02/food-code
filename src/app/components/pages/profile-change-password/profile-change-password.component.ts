import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-profile-change-password",
  templateUrl: "./profile-change-password.component.html",
  styleUrls: ["./profile-change-password.component.css"],
  providers: [MessageService],
})
export class ProfileChangePasswordComponent implements OnInit {
  changePassForm!: FormGroup;
  isSubmitted = false;
  returnUrl = "";
  submitted = false;
  user: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.changePassForm = this.fb.group(
      {
        password: this.fb.control("", [Validators.required]),
        confirmPassword: this.fb.control("", [Validators.required]),
      },
      {
        validator: this.checkPassword,
      }
    );
  }

  checkPassword(group: FormGroup) {
    let password = group.controls.password.value;
    let confirmPassword = group.controls.confirmPassword.value;
    return password === confirmPassword ? null : { notSame: true };
  }

  showPassword = false;
  showConfirmPassword = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    const passwordInput = document.getElementById(
      "password"
    ) as HTMLInputElement;
    if (this.showPassword) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
    const confirmPasswordInput = document.getElementById(
      "confirmPassword"
    ) as HTMLInputElement;
    if (this.showPassword) {
      confirmPasswordInput.type = "text";
    } else {
      confirmPasswordInput.type = "password";
    }
  }

  show() {
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: "Saved password successful",
    });
  }
}
