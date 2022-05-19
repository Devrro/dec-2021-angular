import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../models/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http:HttpClient
  ) { }

  getAllPosts(): Observable<any[]>{
    return this.http.get<any[]>(`${this.url}/posts`)
  }
  getPostsId(id:number): Observable<IPosts>{
    return this.http.get<IPosts>(`${this.url}/posts/${id}`)
  }
}
