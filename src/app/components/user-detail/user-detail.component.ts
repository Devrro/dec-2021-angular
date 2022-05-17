import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user:IUser = {id:0,name:'',email:''}

  constructor(private ac: ActivatedRoute) { }

  ngOnInit(): void {
this.ac.params.subscribe(() => {
  let {state:{data}}=history;
  console.log(data)
  return this.user = data
})
  }

}
