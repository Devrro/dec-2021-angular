import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post_body: object = {body:''}

  constructor(private ac: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.ac.params.subscribe(value => {
      let {state: {data}} = history
      this.post_body = data.body
      console.log(this.post_body);
    })
  }

}
