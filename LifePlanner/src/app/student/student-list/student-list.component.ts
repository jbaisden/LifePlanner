import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../../shared/student.model';
import { Subscription } from 'rxjs';
import { StudentService } from 'src/app/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, OnDestroy {

  students: Student[];
  studentListSubscription: Subscription;
  constructor(private scheduleService: StudentService) { }

  ngOnInit() {
    this.studentListSubscription = this.scheduleService.studentsChanged.subscribe(
      (studentList: Student[]) => {
        this.students = studentList;
      }
    );
    //get schedule objects from schedule service
    this.students = this.scheduleService.getStudents();
  }

  ngOnDestroy() {
    this.studentListSubscription.unsubscribe();
  }

}
