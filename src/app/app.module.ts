import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MainLayoutComponent} from './layouts/main-layout/main-layout.component';
import {RegisterComponent} from './app-components/register/register.component';
import {LoginComponent} from './app-components/login/login.component';
import {CarsComponent} from './app-components/cars/cars.component';
import {CarComponent} from './app-components/car/car.component';
import {HeaderComponent} from './app-components/header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./services";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    RegisterComponent,
    LoginComponent,
    CarsComponent,
    CarComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
