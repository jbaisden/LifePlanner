import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from 'src/app/student/student-list/student-list.component';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';
import { ScheduleEditComponent } from './student/schedule/schedule-edit/schedule-edit.component';
import { ClientListComponent } from 'src/app/client/client-list/client-list.component';
import { ClientEditComponent } from 'src/app/client/client-edit/client-edit.component';
import { LogSessionComponent } from './client/log-session/log-session.component';
import { PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', component: ClientListComponent  },
  { path: 'client/edit/:id', component: ClientEditComponent },
  { path: 'client', component: ClientListComponent },
  { path: 'client/log-session', component: LogSessionComponent },
  { path: 'student', component: StudentListComponent },
  { path: 'edit/:id', component: StudentEditComponent },
  { path: 'schedule/:schedId', component: ScheduleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
