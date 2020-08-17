import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PastpapersService } from '../services/pastpapers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PastPaperModel } from '../past-papers/pastpaper.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-year2',
  templateUrl: './year2.component.html',
  styleUrls: ['./year2.component.css', '../past-papers/past-papers.component.css']
})
export class Year2Component implements OnInit {


  papers: PastPaperModel[];
  form: FormGroup;
  pastpapersarray = [];
  pastpaperReview: string;
  pastpaperExt = true;
  isAdminLoggedIn = false;
  constructor(private pastpapers: PastpapersService, private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    this.isAdminLoggedIn = this.auth.getAdminValidation();
    this.pastpapersarray = [...this.pastpapers.pastpapersarray];
    this.form = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'year': new FormControl(null, Validators.required),
      'pastpapers': new FormControl(null, Validators.required)
    });
    this.getPapersFromServer();
  }


  fileUploadEvent(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    // console.log(file.name);
    const filename = file.name;
    this.pastpaperReview = filename;
    const fileExt = filename.substring(filename.length - 3, filename.length);
    if (fileExt !== 'pdf') {
      this.pastpaperExt = false;
    } else {
      this.pastpaperExt = true;
      this.form.patchValue({ pastpapers: file });
      this.form.get('pastpapers').updateValueAndValidity();
    }
    console.log(file.name);
    console.log(this.form.get('pastpapers'));
  }

  uploadPastpapers() {
    const paperdata = new FormData();
    paperdata.append('title', this.form.get('title').value);
    paperdata.append('year', this.form.get('year').value);
    paperdata.append('pastpaper', this.form.get('pastpapers').value, this.form.get('title').value);

    console.log(this.form.get('pastpapers').value);
    //const pastpaper = {title: this.form.get('title').value , year: this.form.get('year').value};

    this.http.post<{ message: string }>('https://pastpaper-platform.herokuapp.com/api/year2pps', paperdata).subscribe(
      (responseData) => {
        console.log(responseData['message']);
        // this.form.reset();
        this.form.patchValue({ pastpapers: null });
        this.form.get('pastpapers').updateValueAndValidity();
        this.pastpaperReview = "";
        this.getPapersFromServer();
      });
  }


  getPapersFromServer() {
    this.http
      .get<{ message: string, papers: any }>(
        'https://pastpaper-platform.herokuapp.com/api/year2pps'
      )
      .pipe(map((postData) => {
        return postData.papers.map(paper => {
          return {
            id: paper._id,
            title: paper.title,
            year: paper.year,
            ppPath: paper.ppPath
          };
        });
      }))
      .subscribe((transformedPostData) => {
        this.papers = transformedPostData;
        // console.log(this.papers);
        // console.log( this.accounts);
      });
  }

  deleteRecord(id: string, i: number) {
    this.http.delete<{ message: string }>('https://pastpaper-platform.herokuapp.com/api/year2pps/' + id).subscribe(
      (responseData) => {
        alert(responseData['message']);
      });
    // console.log(i);
    this.papers.splice(i, 1);
  }
}
