import { PastPapersComponent } from './past-papers/past-papers.component';
import { Year2Component } from './year2/year2.component';
import { Year3Component } from './year3/year3.component';
import { Year4Component } from './year4/year4.component';
import { Year1Component } from './year1/year1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentRegistrationComponent} from './student-registration/student-registration.component';

const routes: Routes = [
  { path: '' , component: StudentRegistrationComponent},
  { path: 'year4' , component: Year4Component},
  { path: 'year3' , component: Year3Component},
  { path: 'year2' , component: Year2Component},
  { path: 'year1' , component: Year1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
