import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IPosts} from "../models/IPosts";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _url = 'https://jsonplaceholder.typicode.com'

  constructor(private HttpClient: HttpClient) {
  }

  getAllPosts(): Observable<IPosts[]> {
    return this.HttpClient.get<IPosts[]>(`${this._url}/posts`)
  }

  getPostById(id: { id: any }): Observable<IPosts> {
    return this.HttpClient.get<IPosts>(`${this._url}/posts/${id}`)
  }

}
