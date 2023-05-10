import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  showMessage = new BehaviorSubject<boolean>(false);
  constructor(private messageService: MessageService) {}

  showSuccess() {
    this.messageService.add({
      key: "success",
      severity: "success",
      summary: "Successful",
      detail: "Register Successful",
    });
  }

  showError() {
    this.messageService.add({
      key: "error",
      severity: "error",
      summary: "Error",
      detail: "Register Failed",
    });
  }
}
