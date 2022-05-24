import { Component, OnInit } from '@angular/core';
import {IPosts} from "../models/IPosts";
import {PostsService} from "../post-services/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPosts[]=[]
  constructor(
    private postsService: PostsService
  ) { }

  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(value => this.posts=value)
  }

}
