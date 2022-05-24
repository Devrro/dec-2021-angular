import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../../models/IUser";
import {IPosts} from "../../posts/models/IPosts";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _url = 'https://jsonplaceholder.typicode.com';

  constructor(
    private HttpClient: HttpClient
  ) {
  }

  getAllUsers(): Observable<IUser[]> {
    return this.HttpClient.get<IUser[]>(`${this._url}/users`);
  }
  getUser(id:number): Observable<IUser> {
    return this.HttpClient.get<IUser>(`${this._url}/users/${id}`);
  }

  getUsersPosts(id:number):Observable<IPosts[]>{
    return this.HttpClient.get<IPosts[]>(`${this._url}/users/${id}/posts/`);
  }

}
