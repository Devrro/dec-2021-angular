import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../models/IComments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private url:string = 'https://jsonplaceholder.typicode.com'

  constructor(private http:HttpClient) { }

  getAllComments():Observable<IComments[]>{
    return this
      .http
      .get<IComments[]>(`${this.url}/comments`)
  }

}
