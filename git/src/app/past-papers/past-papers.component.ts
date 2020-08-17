import { FormControl, Validators, FormGroup } from '@angular/forms';
import { PastpapersService } from './../pastpapers.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { PastPaperModel } from './pastpaper.model';

@Component({
  selector: 'app-past-papers',
  templateUrl: './past-papers.component.html',
  styleUrls: ['./past-papers.component.css'],
  providers: [PastpapersService]
})
export class PastPapersComponent implements OnInit {
  papers: PastPaperModel [];
  form: FormGroup;
pastpapersarray = [];
pastpaperReview: string;
pastpaperExt = true;
  constructor(private pastpapers: PastpapersService, private http: HttpClient) { }

  ngOnInit(): void {
this.pastpapersarray = [...this.pastpapers.pastpapersarray];
this.form = new FormGroup({
  'title': new FormControl(null, Validators.required),
  'year': new FormControl(null, Validators.required),
  'pastpapers': new FormControl(null, Validators.required)
  });
  this.getPapersFromServer();
  }


  fileUploadEvent(event: Event){
    const file = (event.target as HTMLInputElement).files[0];
   // console.log(file.name);
    const filename = file.name;
    this.pastpaperReview = filename;
    const fileExt = filename.substring(filename.length-3, filename.length);
    if (fileExt !== 'pdf'){
      this.pastpaperExt = false;
    }else {
      this.pastpaperExt = true;
      this.form.patchValue({pastpapers: file});
      this.form.get('pastpapers').updateValueAndValidity();
    }
    console.log(file.name);
    console.log(this.form.get('pastpapers'));
  }

  uploadPastpapers(){
    const paperdata = new FormData();
    paperdata.append('title', this.form.get('title').value);
    paperdata.append('year', this.form.get('year').value );
    paperdata.append('pastpaper', this.form.get('pastpapers').value , this.form.get('title').value);

    console.log(paperdata.get('title'));
    //const pastpaper = {title: this.form.get('title').value , year: this.form.get('year').value};

    this.http.post<{message: string}>('http://localhost:3000/api/pastpapers', paperdata).subscribe(
      (responseData) => {
        console.log(responseData['message']);
        // this.form.reset();
        this.form.patchValue({pastpapers: null});
        this.form.get('pastpapers').updateValueAndValidity();
        this.pastpaperReview = "";
        this. getPapersFromServer();
      });
  }


  getPapersFromServer(){
    this.http
      .get<{message: string , papers: any}>(
        'http://localhost:3000/api/pastpapers'
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
        console.log( this.papers);
      // console.log( this.accounts);
    });
  }
}
