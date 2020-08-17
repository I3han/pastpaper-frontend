import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userValidated = false;
  private adminLoggedIn = false;
  constructor() { }

  setvalidation(){
    this.userValidated = true;
  }

  getvalidation(){
    return this.userValidated;
  }

  setAdminValidation(){
    this.adminLoggedIn = true;
  }

  getAdminValidation(){
    return this.adminLoggedIn;
  }
}
