import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';

import { Account } from './account.model';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  accounts: Account[];
  form: FormGroup;

  constructor(private http: HttpClient) { }


postdata(){
  this.http.get<{message: string , posts: Account[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
    this.accounts = postData['posts'];
    // console.log( this.accounts);
    // console.log( this.accounts);
  });
}

  ngOnInit(): void {
    this.postdata();

    this.form = new FormGroup({
      un: new FormControl('', Validators.required),
      faculty:  new FormControl('', Validators.required),
      pw:  new FormControl('', Validators.required),
    });
  }

  submitForm(){
    // console.log(this.form.get('un').value);
    // console.log(this.form.get('faculty').value);

    const account = {un: this.form.get('un').value , faculty: this.form.get('faculty').value};

    this.http.post<{message: string}>('http://localhost:3000/api/posts', account).subscribe(
      (responseData) => {
        console.log(responseData['message']);
        this.postdata();
      });

  }
}
