import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';
import { StudentListComponent } from 'src/app/student/student-list/student-list.component';
import { StudentItemComponent } from 'src/app/student/student-item/student-item.component';
import { StudentComponent } from 'src/app/student/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentEditComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
