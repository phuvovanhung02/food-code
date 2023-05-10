import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { finalize } from "rxjs";
import { MessageService } from "primeng/api";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.css"],
  // providers: [MessageService],
})
export class SignupPageComponent implements OnInit {
  signupForm!: FormGroup;
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
    this.signupForm = this.fb.group(
      {
        name: this.fb.control("", [Validators.required]),
        email: this.fb.control("", [Validators.required, Validators.email]),
        password: this.fb.control("", [Validators.required]),
        confirmPassword: this.fb.control("", [Validators.required]),
        address: this.fb.control("", [Validators.required]),
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

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }

    this.userService.register(this.signupForm.value).subscribe(
      (res: any) => {
        this.user = res.result;
        // this.userService.register(res.result.token);
        // this.userService.register(res.result.user.id);
        this.messageService.add({
          key: "success",
          severity: "success",
          summary: "Successful",
          detail: "Register Successful",
        });

        this.router.navigate(["/login"]);
      },
      (err) => {
        this.messageService.add({
          key: "error",
          severity: "error",
          summary: "Error",
          detail: "Register Failed",
        });
      }
    );
  }
}
