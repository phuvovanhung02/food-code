import { Component, Input } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { CartService } from "src/app/services/cart.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  public cartBadge = 0;
  isOverlayHidden = true;
  username: string;
  products!: Array<any>;

  navbarOpen = false;
  constructor(
    private userService: UserService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.username = this.userService.currentUser.name;
    this.products = this.cartService.getCartData();
    this.cartService.cartBadge$.subscribe((count) => {
      this.cartBadge = count;
    });
    this.cartService.updateCartBadge$.subscribe((count) => {
      this.cartBadge = count;
    });
    this.cartBadge = this.products.length;
  }

  toggleOverlay() {
    this.isOverlayHidden = !this.isOverlayHidden;
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.userService.logout();
    this.cartService.clearCartData();
  }
}
