import {Component, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsService} from "../../services";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: ICar[] = [];
  //@ts-ignore
  carForm : FormGroup;

  constructor(
    private carService: CarsService
  ) {

  }

  ngOnInit(): void {
    this._createCarForm()
    this.carService.getAll().subscribe((value => {
      this.cars = value
    }))
  }

  _createCarForm():void{
    this.carForm = new FormGroup({

      model: new FormControl(null,[Validators.required]),
      year: new FormControl(null,[Validators.min(4),Validators.max(4),Validators.required]),
      price: new FormControl(null,[Validators.min(0),Validators.max(6),Validators.required]),
    })
  }

  createCar():void{
    this.carService.create(this.carForm.getRawValue()).subscribe(value => this.cars.push(value))
  }

}

