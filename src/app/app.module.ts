import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginPageComponent } from "./components/pages/login-page/login-page.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoadingInterceptor } from "./shared/interceptors/loading.interceptor";
import { AuthInterceptor } from "./auth/auth.interceptor";
import { ButtonModule } from "primeng/button";
import { MultiSelectModule } from "primeng/multiselect";
import { TableModule } from "primeng/table";
import { SkeletonModule } from "primeng/skeleton";
import { BreadcrumbModule } from "primeng/breadcrumb";
import { PanelModule } from "primeng/panel";
import { CardModule } from "primeng/card";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";
import { RadioButtonModule } from "primeng/radiobutton";
import { DropdownModule } from "primeng/dropdown";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputNumberModule } from "primeng/inputnumber";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { AutoCompleteModule } from "primeng/autocomplete";
import { TooltipModule } from "primeng/tooltip";
import { CalendarModule } from "primeng/calendar";
import { FieldsetModule } from "primeng/fieldset";
import { SliderModule } from "primeng/slider";
import { DynamicDialogModule } from "primeng/dynamicdialog";
import { InputSwitchModule } from "primeng/inputswitch";
import { ChipsModule } from "primeng/chips";
import { ListboxModule } from "primeng/listbox";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { AccordionModule } from "primeng/accordion";
import { ToolbarModule } from "primeng/toolbar";
import { SplitterModule } from "primeng/splitter";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ToggleButtonModule } from "primeng/togglebutton";
import { ProgressBarModule } from "primeng/progressbar";
import { TagModule } from "primeng/tag";
import { BlockUIModule } from "primeng/blockui";
import { DeferModule } from "primeng/defer";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from "primeng/toast";
import { SelectButtonModule } from "primeng/selectbutton";
import { NgxSpinnerModule } from "ngx-spinner";
import { SignupPageComponent } from "./components/pages/signup-page/signup-page.component";
import { HomePageComponent } from "./components/pages/home-page/home-page.component";
import { MessageService } from "primeng/api";
import { OrderPageComponent } from "./components/pages/order-page/order-page.component";
import { FormsModule } from "@angular/forms";
import { RatingModule } from "primeng/rating";
import { ProductComponent } from "./components/pages/home-page/product/product.component";
import { CartPageComponent } from "./components/pages/cart-page/cart-page.component";
import { ProductDetailsPageComponent } from "./components/pages/product-details-page/product-details-page.component";
import { ImageModule } from "primeng/image";

import { DetailPageComponent } from "./components/pages/product-details-page/detail-page/detail-page.component";

import { DividerModule } from "primeng/divider";
import { ProfilePageComponent } from "./components/pages/profile-page/profile-page.component";

import { ProfileChangePasswordComponent } from "./components/pages/profile-change-password/profile-change-password.component";

import { HeaderComponent } from "./components/pages/header/header.component";
const PRIMENG_DEPENDENCIES = [
  ButtonModule,
  MultiSelectModule,
  TableModule,
  SkeletonModule,
  BreadcrumbModule,
  PanelModule,
  CardModule,
  InputTextModule,
  CheckboxModule,
  RadioButtonModule,
  DropdownModule,
  InputTextareaModule,
  InputNumberModule,
  TabViewModule,
  DialogModule,
  ConfirmDialogModule,
  MessagesModule,
  MessageModule,
  AutoCompleteModule,
  TooltipModule,
  FieldsetModule,
  SliderModule,
  ToastModule,
  DynamicDialogModule,
  InputSwitchModule,
  ChipsModule,
  ListboxModule,
  ConfirmPopupModule,
  AccordionModule,
  ToolbarModule,
  SplitterModule,
  ScrollPanelModule,
  CascadeSelectModule,
  CalendarModule,
  ToggleButtonModule,
  ProgressBarModule,
  TagModule,
  BlockUIModule,
  DeferModule,
  FileUploadModule,
  SelectButtonModule,
  NgxSpinnerModule,
  FormsModule,
  RatingModule,
  DividerModule,
  ImageModule,
];
@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomePageComponent,
    OrderPageComponent,
    ProductComponent,
    CartPageComponent,
    ProductDetailsPageComponent,
    ProfilePageComponent,
    ProfileChangePasswordComponent,
    DetailPageComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...PRIMENG_DEPENDENCIES,
  ],
  exports: [...PRIMENG_DEPENDENCIES],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    MessageService,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
//fix1
