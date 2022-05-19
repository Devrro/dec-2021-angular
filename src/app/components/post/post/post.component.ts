import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../../models/IPosts";
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPosts = {id: 0, body: '', title: '', userId: 0}

  constructor(
  ) {
  }

  ngOnInit(): void {
    // if (this.post)
  }

}
