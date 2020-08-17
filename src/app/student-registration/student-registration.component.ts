import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Account } from './account.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  accounts: Account[];
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.form = new FormGroup({
      index: new FormControl('', [Validators.required, Validators.pattern('^1(\\d{5})[a-zA-Z]$')])
    });
  }

  Enter() {
    // console.log(this.form.value.index);
    if (this.form.valid) {
      //console.log("Enter");
      this.auth.setvalidation();
      this.router.navigate(['/platform']);

    } else if (this.form.value.index === '999999X') {
      this.auth.setvalidation();
      this.auth.setAdminValidation();
      alert('You Logged in as an ADMIN!');
      this.router.navigate(['/platform']);

    } else {
      alert('Invalid Index Number');
    }

  }

  // postdata(){
  //   this.http.get<{message: string , posts: Account[]}>('http://localhost:3000/api/posts').subscribe((postData) => {
  //     this.accounts = postData['posts'];
  //     // console.log( this.accounts);
  //     // console.log( this.accounts);
  //   });
  // }

  //   ngOnInit(): void {
  //     this.postdata();

  //     this.form = new FormGroup({
  //       un: new FormControl('', Validators.required),
  //       faculty:  new FormControl('', Validators.required),
  //       pw:  new FormControl('', Validators.required),
  //     });
  //   }

  //   submitForm(){
  //     // console.log(this.form.get('un').value);
  //     // console.log(this.form.get('faculty').value);

  //     const account = {un: this.form.get('un').value , faculty: this.form.get('faculty').value};

  //     this.http.post<{message: string}>('http://localhost:3000/api/posts', account).subscribe(
  //       (responseData) => {
  //         console.log(responseData['message']);
  //         this.postdata();
  //       });

  //   }
}
