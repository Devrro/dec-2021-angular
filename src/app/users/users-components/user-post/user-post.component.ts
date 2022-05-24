import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from "../../../posts/models/IPosts";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input()
  userPost: IPosts = {
    id: 0,
    userId: 0,
    title: '',
    body: '',
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
