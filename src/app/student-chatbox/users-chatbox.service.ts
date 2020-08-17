import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  name: string;
  email: string;
  des: string;
  gender: string;

  constructor() {
  }

  setUser(name: string,  email: string,  des: string, gender: string){
    this.name = name;
    this.email = email;
    this.des = des;
    this.gender = gender;

  }

  getUser(){
    return this.name;
  }
}
