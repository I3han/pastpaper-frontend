import { Component } from '@angular/core';

import { DbService } from './services/db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DbService]
})
export class AppComponent {
  title = 'ecom-site';

  constructor(private dbService: DbService){

  }
}
