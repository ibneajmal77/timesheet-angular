import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './time-sheet.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [
    TimeSheetComponent
  ],
  imports: [
    CommonModule,
    TimeSheetRoutingModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    CalendarModule
  ]
})
export class TimeSheetModule { }