import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPosts} from "../models/IPosts";
import {PostsService} from "../post-services/posts.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(
    private ac: ActivatedRoute,
    private postService: PostsService,
    private router: Router,
  ) {
  }

  @Input()
  post: IPosts = {body: '', id: 0, userId: 0, title: ''}

  ngOnInit(): void {
    this.ac.params.subscribe(({id}) => {
      if ('id' in history.state) {
        this.post = history.state
        // this.router.navigate([this.post.id],{relativeTo:this.ac}).then(()=>{})
      } else {
        this.postService.getPostById(id).subscribe(value => this.post = value)
      }
    })
  }

}
