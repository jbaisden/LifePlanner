import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { ScheduleEditComponent } from './schedule/schedule-edit/schedule-edit.component';

const routes: Routes = [
  { path: 'list', component: ScheduleListComponent },
  { path: 'edit/:id', component: ScheduleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
