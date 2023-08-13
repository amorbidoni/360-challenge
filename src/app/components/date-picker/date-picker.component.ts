import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { CustomDateAdapter } from 'src/app/helpers/CustomDateAdapter';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
export const INITIAL_DATE = '10-17-2022'
export const INITIAL_DATE_GB = '17-10-2022'

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, 
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }, 
    { provide: DateAdapter, useClass: CustomDateAdapter }
  ]
})
export class DatePickerComponent implements OnInit {
  @Output() onDateSelectEmitter:EventEmitter<string> = new EventEmitter<string>()
  dateToday:Date = new Date();
  initialDate = new Date(INITIAL_DATE)
  ngOnInit(): void {
    console.log(this.initialDate)
  }


  getPreviousDay(date = new Date()) {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);
    return previous;
  }
  getDateString(d:Date){
    return d.toLocaleDateString("en-GB")   
  }
  selectDate(e:MatDatepickerInputEvent<any, any> ){
    this.onDateSelectEmitter.emit(this.getDateString(e.value).replace(/\//g, "-"))
  }
  
  
}
