import {Component, OnInit} from '@angular/core';
import {IUser} from "../../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser = {
    username: '',
    id: 0,
    email: '',
    name: ''
  }

  constructor(private ac: ActivatedRoute) {
  }


  ngOnInit(): void {

    this.ac.data.subscribe(({userData}) => {
      if ('id' in history.state) {
        console.log(history.state)
        this.user = history.state;
      } else {
        this.user = userData
      }
    })
  }
}
