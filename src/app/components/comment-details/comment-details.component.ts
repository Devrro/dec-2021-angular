import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../models/IComment";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  comment: IComment = {id: 0, body: '', email: '', postId: 0, name: ''}

  constructor(
    private ac: ActivatedRoute,
    private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    this.ac.params.subscribe(({id}) =>
        this.commentService.getCommentById(id).subscribe(value => this.comment = value)
      // this.commentService.getAllCommentById(value)
    )

  }

}
