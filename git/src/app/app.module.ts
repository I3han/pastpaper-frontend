import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { FirstPageComponent } from './student-chatbox/first-page.component';
import { UserComponent } from './user/user.component';
import { SecondPageComponent } from './event-organizer/second-page.component';
import { HeaderComponent } from './header/header.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { CoursesComponent } from './courses/courses.component';
import { PastPapersComponent } from './past-papers/past-papers.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { NavBarSmallComponent } from './nav-bar-small/nav-bar-small.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { Year1Component } from './year1/year1.component';
import { Year2Component } from './year2/year2.component';
import { Year3Component } from './year3/year3.component';
import { Year4Component } from './year4/year4.component';


@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    FirstPageComponent,
    UserComponent,
    SecondPageComponent,
    HeaderComponent,
    StudentRegistrationComponent,
    CoursesComponent,
    PastPapersComponent,
    CompetitionsComponent,
    NavBarSmallComponent,
    Year1Component,
    Year2Component,
    Year3Component,
    Year4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent],
  exports:[MatExpansionModule]
})
export class AppModule { }
