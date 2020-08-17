import { Component, OnInit } from '@angular/core';

import { UsersService } from '../student-chatbox/users-chatbox.service';

export interface Myinterface {
  remove(index: number);
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {

  public index: number;
  public selfRef: UserComponent;
  name: string;
  email: string;
  des: string;
  gender: string ;

  public compInteraction: Myinterface;

  constructor( private userService: UsersService) {
  }

  removeMe(index) {
    this.compInteraction.remove(index);
  }

  ngOnInit(): void {
    this.name = this.userService.name;
    this.email = this.userService.email;
    this.des = this.userService.des;
    this.gender = this.userService.gender;
  }

}
