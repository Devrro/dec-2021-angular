import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../models/IUser";
import {UserService} from "../../../services/user.service";
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:IUser[] = []
  constructor(private uService:UserService) {

  }

  ngOnInit(): void {
    this.uService.getUsers().subscribe(value=> {
      this.users = value
    })
  }

}
