export class Event{
  date = '';
  time = '';
  status = '';

  constructor(date: string , time: string , status = ''){
    this.date = date;
    this.time = time;
    this.status = status;
  }
}
