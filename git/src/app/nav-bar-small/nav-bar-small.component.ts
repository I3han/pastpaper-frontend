import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-small',
  templateUrl: './nav-bar-small.component.html',
  styleUrls: ['./nav-bar-small.component.css']
})
export class NavBarSmallComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
