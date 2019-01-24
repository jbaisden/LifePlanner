import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from 'src/app/student/student-list/student-list.component';
import { StudentEditComponent } from 'src/app/student/student-edit/student-edit.component';

const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'list', component: StudentListComponent },
  { path: 'edit/:id', component: StudentEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
