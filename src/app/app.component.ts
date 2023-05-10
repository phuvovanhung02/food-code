import { Component, OnInit } from "@angular/core";
import { MessageService } from "primeng/api";
import { ToastService } from "./services/toast.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [MessageService],
})
export class AppComponent implements OnInit {
  constructor(private toast: ToastService) {}
  ngOnInit(): void {
    this.toast.showMessage.subscribe((res) => {
      if (res) {
        this.toast.showSuccess();
      } else {
        this.toast.showError();
      }
    });
  }
  title = "frontend";
}
