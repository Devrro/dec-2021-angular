import {Component, OnInit} from '@angular/core';
import {IPosts} from "../../../posts/models/IPosts";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../users-services/users.service";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  userPostsCollection: IPosts[] = []

  constructor(
    private ac: ActivatedRoute,
    private userService:UsersService,
  ) {

  }

  ngOnInit(): void {
    this.ac.params.subscribe(({id})=>{
      this.userService.getUsersPosts(id).subscribe(value => this.userPostsCollection = value)
    })

  }

}
