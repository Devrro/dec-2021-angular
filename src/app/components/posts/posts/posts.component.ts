import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../services/post.service";
import {IPosts} from "../../../models/IPosts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[] = []
  constructor(
    private postService: PostService
  ) {
  }

  ngOnInit(): void {
  this.postService.getAllPosts().subscribe(value => {
    this.posts = value
  })
  }

}
