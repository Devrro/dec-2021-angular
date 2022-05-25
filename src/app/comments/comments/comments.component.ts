import { Component, OnInit } from '@angular/core';
import {IComment} from "../models/IComment";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  comments:IComment[] = []

  constructor(
    private ac:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.ac.data.subscribe(({data})=>{
      this.comments = data;
    })
  }

}
