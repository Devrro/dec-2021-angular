import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../../services/post.service";
import {IPosts} from "../../models/IPosts";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post_body: string = ''

  constructor(
    private ac: ActivatedRoute,
    private postService:PostService,

  ) {
  }

  ngOnInit(): void {
    this.ac.params.subscribe(({id}) => {
        let {state: {data}} = history
      if(data){
        this.post_body = data.body
        console.log(this.post_body);
      } else{
        this.postService.getPostsId(id).subscribe(({body}) => {
           this.post_body = body
         }
       )

      }
    })
  }

}
