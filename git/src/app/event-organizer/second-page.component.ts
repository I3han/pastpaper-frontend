import { Component, OnInit , AfterViewInit, OnDestroy } from '@angular/core';

import { Event } from './event';
import { DbService } from '../db.service';

declare var $: any;

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css']
})
export class SecondPageComponent implements OnInit, AfterViewInit, OnDestroy {

  date = new Date();
  currentDate: string;
  currentTime: string;
  events = [];
  editingDate: string;
  editingTime: string;

  digitFormatter(num) {
    return (num < 10 ? '0' : '') + num;
  }

  constructor(private dbService: DbService) {
    this.currentDate = this.date.getFullYear().toString() + '-' + this.digitFormatter(this.date.getMonth()) + '-' + this.date.getDate().toString();
    // console.log(this.date.getHours() + ':' + this.date.getMinutes());
    // console.log(this.date.getMonth().slice(2).toString());
    this.currentTime = this.digitFormatter(this.date.getHours()) + ':' + this.digitFormatter(this.date.getMinutes());
    this.events = this.dbService.events;
  }

  ngOnInit(): void {
    $('#btnUpdate').hide();
    console.log(this.dbService.events);
  }
  getTimeg(str){
    this.currentTime = str;
  }

  getDateg(str){
    this.currentDate = str;
  }

  getEvent(){
    this.events.push(new Event(this.currentDate , this.currentTime));
  }

  giveal(str){
    console.log(typeof str);

  }

  ngAfterViewInit() {
    $(document).on('click', '.dltRow', function() {
      $(this).closest('tr').remove();
    });

    $(document).on('click', '.updRow', (event) => {
      const editingDate  = $(event.target).closest('tr').find('td:eq(0)').text();
      const editingTime  = $(event.target).closest('tr').find('td:eq(1)').text();
      // console.log(this.editingDate);
      $('#datePicker').val( editingDate);
      $('#timePicker').val(editingTime);
      //
      // console.log(editingDate);
      // console.log(this);

      this.editingDate = editingDate;
      this.editingTime = editingTime;
      $('#btnUpdate').show(500);
      $('#btnAdd').hide(500);
    });



    const expTime = setInterval( () => {

      $('#tblEvents tr').each(function(){
        const currentRow = $(this);
        const date = currentRow.find('td:eq(0)').text();
        const time = currentRow.find('td:eq(1)').text();

        const day = parseInt(date.substring(8));
        const month = parseInt(date.substring(5 , 7));
        const yr = parseInt(date.substring(0 , 4));

        const hr = parseInt(time.substring(0 , 2));
        const min = parseInt(time.substring(3));

        const date2 = new Date();
// console.log(date2.getDay());
        if (yr < date2.getFullYear()){
          currentRow.find('td:eq(2)').html(`<p style="color: red">Expired</p>`);
        }else if (month < date2.getMonth()){
          currentRow.find('td:eq(2)').html(`<p style="color: red">Expired</p>`);
        }else if (day < date2.getDate()) {
          currentRow.find('td:eq(2)').html(`<p style="color: red">Expired</p>`);
        }else if (day === date2.getDate()){

          if (hr < date2.getHours()) {
            currentRow.find('td:eq(2)').html(`<p style="color: red">Expired</p>`);
          }else if (hr === date2.getHours() && min < date2.getMinutes()){
            // console.log('expired');
            currentRow.find('td:eq(2)').html(`<p style="color: red">Expired</p>`);
          }else {
            currentRow.find('td:eq(2)').html(`<p style="color: green">Active</p>`);
          }
        }else {
          currentRow.find('td:eq(2)').html(`<p style="color: green">Active</p>`);
        }

      });

    }, 1000 );
  }

  editingValue(val1 , val2){
    this.editingDate = val1;
    this.editingTime = val2;
  }

  updateEvent(){
    const temp1 = this.editingDate;
    const temp2 = this.currentDate;
    const temp3 = this.currentTime;
    // console.log(this.editingDate);

    $('#tblEvents tr').each(function() {

      const currentRow = $(this);
      const date = currentRow.find('td:eq(0)').text();

      console.log(date + ' ' + temp1);

      if (date === temp1){
        currentRow.find('td:eq(0)').html(temp2);
        currentRow.find('td:eq(1)').html(temp3);
      }
    });

    $('#btnUpdate').hide(500);
    $('#btnAdd').show(500);
  }

  ngOnDestroy(): void{
     this.dbService.events = [...this.events];
    // console.log(this.dbService.events);
  }
}
