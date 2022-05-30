import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarsService} from "../../services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  @Input()
  car:Partial<ICar> = {}

  constructor(
    private carService:CarsService
  ) { }

  ngOnInit(): void {
  }

  deleteById(id: number|undefined) {
    this.carService.deleteByID(`${id}`).subscribe()
  }
}
