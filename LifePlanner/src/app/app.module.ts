import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';
import { StudentListComponent } from 'src/app/student/student-list/student-list.component';
import { StudentItemComponent } from 'src/app/student/student-item/student-item.component';
import { ScheduleEditComponent } from './student/schedule/schedule-edit/schedule-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentItemComponent,
    ScheduleEditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
