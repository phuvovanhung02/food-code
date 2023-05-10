import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "src/app/services/user.service";
import { MessageService } from "primeng/api";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitted = false;
  returnUrl = "";
  submitted = false;
  user: any;
  isLoading = false;
  username: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("", [Validators.required, Validators.email]),
      password: this.fb.control("", [Validators.required]),
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.spinner.show();

    this.userService
      .login(this.loginForm.value)
      .subscribe(
        (res) => {
          this.messageService.add({
            key: "success",
            severity: "success",
            summary: "Successful",
            detail: "Login Successful",
          });

          this.router.navigate(["/home"]);
        },
        (err) => {
          this.messageService.add({
            key: "error",
            severity: "error",
            summary: "Fail",
            detail: "Login Fail",
          });
        }
      )
      .add(() => {
        this.isLoading = false;
        this.spinner.hide();
      });
  }
}
