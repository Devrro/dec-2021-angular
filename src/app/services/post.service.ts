import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../models/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url:string = 'https://jsonplaceholder.typicode.com'

  getPosts():Observable<IPosts[]>{
    return this
      .http
      .get<IPosts[]>(`${this.url}/posts`)
  }
  getPostById(id:string):Observable<IPosts[]>{
    return this
      .http
      .get<IPosts[]>(`${this.url}/post/${id}`)
  }

}
