import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IComment} from "../../models/IComment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  comment: IComment = {id: 0, body: '', email: '', postId: 0, name: ''}

  constructor(
    private ac: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.ac.params.subscribe(() => {
      let {state: {data}} = history
      this.comment = data
    })
  }

}
