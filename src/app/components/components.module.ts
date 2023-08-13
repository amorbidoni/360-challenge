import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { MessageModalComponent } from './message-modal/message-modal.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@NgModule({
  imports: [ CommonModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule],
  declarations: [DatePickerComponent,  MessageModalComponent],
  exports:[ DatePickerComponent ]
})
export class ComponentsModule { }
