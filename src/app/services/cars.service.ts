import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {urls} from "../contacts";
import {ICar} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars)
  }
  create(car:ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(urls.cars,car)
  }
  getByID(id: string): Observable<ICar> {
    return this.httpClient.get<ICar>(urls.cars + `/${id}`)
  }
  deleteByID(id: string): Observable<void> {
    console.log(id);
    return this.httpClient.delete<void>(urls.cars + `/${id}`)
  }
  updateById(id: string, car:Partial<ICar>): Observable<ICar> {
    return this.httpClient.patch<ICar>(urls.cars + `/${id}`, car)
  }
}
