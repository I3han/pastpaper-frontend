import { CoursesService } from './../courses.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  coursesarray = [];

  constructor( private courses: CoursesService) { }

  ngOnInit(): void {
    this.coursesarray = [...this.courses.courcesarray];
  }

}
