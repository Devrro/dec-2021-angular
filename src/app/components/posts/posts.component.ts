import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../models/IPosts";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {


  constructor(private postService: PostService) { }
  posts: IPosts[];
  ngOnInit(): void {
    this.postService.getPosts().subscribe(response => this.posts = response)
  }

}
