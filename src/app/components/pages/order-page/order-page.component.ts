import { AfterViewInit, Component } from "@angular/core";
import * as L from "leaflet";
import { UserService } from "src/app/services/user.service";
import { CartService } from "src/app/services/cart.service";
import { LocationService } from "src/app/services/location.service";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";

const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: "app-order-page",
  templateUrl: "./order-page.component.html",
  styleUrls: ["./order-page.component.css"],
  providers: [MessageService],
})
export class OrderPageComponent implements AfterViewInit {
  private map: any;
  addressValue: string;
  username: string;
  location: any;
  foods: Array<any>;
  totalPriceOrder: number = 0;
  paymentMethods: string;

  //location in center
  private initMap(): void {
    this.map = L.map("map", {
      center: [10.75, 106.66667],
      zoom: 10,
    });

    const tiles = L.tileLayer(
      "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 30,
        minZoom: 10,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);

    // const markerPoint = L.marker([10.8376584, 106.8329438]);
    const markerPoint = L.marker([this.location.lat, this.location.lng]);
    this.map.addLayer(markerPoint);
  }

  constructor(
    private userService: UserService,
    private cartService: CartService,
    private locationService: LocationService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngAfterViewInit(): void {
    this.username = this.userService.currentUser.name;
    this.addressValue = this.userService.currentUser.address;
    this.locationService.getCurrentLocation().subscribe((value) => {
      this.location = value;
      this.initMap();
    });
    console.log(this.location);
    this.foods = this.cartService.getCartData();
    this.cartService.getCartData().forEach((cartData: any) => {
      return (this.totalPriceOrder =
        this.totalPriceOrder + cartData.quantity * cartData.price);
    });
  }

  ngOnInit(): void {
    // this.username = this.userService.currentUser.name;
    // this.addressValue = this.userService.currentUser.address;
    // this.location = this.locationService.getCurrentLocation();
  }

  removeItem(item: any) {
    this.foods.splice(item, 1);
    this.cartService.setCartData(this.foods);
  }

  updateTotalPrice() {
    this.totalPriceOrder = 0;
    this.foods.forEach((item) => {
      item.total = item.price * item.quantity;
      this.totalPriceOrder += item.total;
    });
  }

  handleCreateOrderFood() {
    const mappingFoods = this.foods.map((item) => {
      return {
        food: item,
        quantity: item.quantity,
        price: item.price,
      };
    });
    const foods: any = {
      items: mappingFoods,
      totalPrice: this.totalPriceOrder,
      addressLatLng: {
        lat: this.location.lat,
        lng: this.location.lng,
      },
      name: this.username,
      address: this.addressValue,
    };

    this.userService.createOrder(foods).then(() => {
      localStorage.removeItem("cart");
    });

    this.messageService.add({
      severity: "success",
      summary: "Successful ",
      detail: "Create Order Successful",
    });
  }
}
