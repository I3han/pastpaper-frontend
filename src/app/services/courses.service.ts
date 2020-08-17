import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  courcesarray = [
    {
      id: 1,
      name: 'English',
      lecturer: 'Mr. saman',
      year: 2012
    },
    {
      id: 2,
      name: 'Sinhala',
      lecturer: 'Mr. kaman',
      year: 2014
    },
    {
      id: 3,
      name: 'History',
      lecturer: 'Mr. nimal',
      year: 2016
    },
    {
      id: 4,
      name: 'Science',
      lecturer: 'Mrs. geetha',
      year: 2011
    },
    {
      id: 5,
      name: 'English',
      lecturer: 'Mr. saman',
      year: 2012
    },
    {
      id: 6,
      name: 'Sinhala',
      lecturer: 'Mr. kaman',
      year: 2014
    },
    {
      id: 7,
      name: 'Science',
      lecturer: 'Mr. nimal',
      year: 2016
    },
    {
      id: 8,
      name: 'History',
      lecturer: 'Mrs. geetha',
      year: 2011
    },
    {
      id: 9,
      name: 'Science',
      lecturer: 'Mr. saman',
      year: 2012
    },
    {
      id: 10,
      name: 'Sinhala',
      lecturer: 'Mr. kaman',
      year: 2014
    },
    {
      id: 11,
      name: 'History',
      lecturer: 'Mr. nimal',
      year: 2016
    },
    {
      id: 12,
      name: 'History',
      lecturer: 'Mrs. geetha',
      year: 2011
    }
  ];

  constructor() { }
}
