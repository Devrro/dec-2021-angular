import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../services/comments.service";
import {IComments} from "../../models/IComments";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService:CommentsService) { }
  comments:IComments[];
  ngOnInit(): void {
    this.commentsService.getAllComments().subscribe(response => this.comments = response)
  }

}
