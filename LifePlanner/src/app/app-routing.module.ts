import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from 'src/app/student/student-list/student-list.component';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';
import { ScheduleEditComponent } from './student/schedule/schedule-edit/schedule-edit.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'edit/:id', component: StudentEditComponent },
  { path: 'schedule/:schedId', component: ScheduleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
