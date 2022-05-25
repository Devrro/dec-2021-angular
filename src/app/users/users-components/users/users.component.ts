import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {UsersService} from "../../users-services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[] = [];

  constructor(
    private usersService: UsersService,
    private ac: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ac.data.subscribe(({usersData})=>{
      this.users = usersData;
    })
  }

}
