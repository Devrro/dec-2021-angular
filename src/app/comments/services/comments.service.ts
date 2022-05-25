import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private _url = 'https://jsonplaceholder.typicode.com'

  constructor(
    private httpService:HttpClient
  ) { }
  getAllComments():Observable<IComment[]>{
    return this.httpService.get<IComment[]>(`${this._url}` + '/' + 'comments')
  }
  getCommentById(id:number):Observable<IComment>{
    return this.httpService.get<IComment>(`${this._url}` + '/' + 'comments' + `/${id}` )
  }

}
