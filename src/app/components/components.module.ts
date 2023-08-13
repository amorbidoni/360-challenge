import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { MessageModalComponent } from './message-modal/message-modal.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { TooltipComponent } from './tooltip/tooltip.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    DatePickerComponent,
    MessageModalComponent,
    TooltipComponent,
    LoaderComponent],
  exports:[ 
    DatePickerComponent,
    TooltipComponent,
    LoaderComponent
  ],

})
export class ComponentsModule { }
