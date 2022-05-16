import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {

  }

  private url:string = 'https://jsonplaceholder.typicode.com'

  getUsers(): Observable<IUser[]> {
    return this
      .http
      .get<any[]>(`${this.url}/users`)
  }
  getUserById(id:number): Observable<IUser[]> {
    return this
      .http
      .get<any[]>(`${this.url}/users/${id}`)
  }
}
