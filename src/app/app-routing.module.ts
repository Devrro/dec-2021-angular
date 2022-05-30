import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MainLayoutComponent} from "./layouts/main-layout/main-layout.component";
import {LoginComponent} from "./app-components/login/login.component";
import {RegisterComponent} from "./app-components/register/register.component";
import {CarsComponent} from "./app-components/cars/cars.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services";
import {HttpClientModule} from "@angular/common/http";

const routes:Routes = [
  {path:'',
    component:MainLayoutComponent,
    children:[
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      {path:'cars',component:CarsComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[AuthService],
  exports:[CommonModule,RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
