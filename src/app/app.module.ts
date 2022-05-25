import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { RegisterComponent } from './app-components/register/register.component';
import { LoginComponent } from './app-components/login/login.component';
import { CarsComponent } from './app-components/cars/cars.component';
import { CarComponent } from './app-components/car/car.component';
import { HeaderComponent } from './app-components/header/header.component';
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { AuthComponent } from './services/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    RegisterComponent,
    LoginComponent,
    CarsComponent,
    CarComponent,
    HeaderComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
