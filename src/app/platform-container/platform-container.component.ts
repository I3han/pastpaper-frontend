import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-platform-container',
  templateUrl: './platform-container.component.html',
  styleUrls: ['./platform-container.component.css']
})
export class PlatformContainerComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    if (!this.auth.getvalidation()){
      alert('You need to Enter Valid Index Number First');
      this.router.navigate(['/']);
    }
  }

}
