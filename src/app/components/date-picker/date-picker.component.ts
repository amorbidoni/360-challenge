import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],

})
export class DatePickerComponent implements OnInit {
  @Output() onDateSelectEmitter:EventEmitter<string> = new EventEmitter<string>()
  dateToday:Date = new Date();

  ngOnInit(): void {
  }


  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
  }
  getDateString(d:Date){
    return d.toLocaleDateString("en-GB")   
  }
  logData(e:MatDatepickerInputEvent<any, any> ){
    this.onDateSelectEmitter.emit(this.getDateString(e.value).replace(/\//g, "-"))
  }
}
