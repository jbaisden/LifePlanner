import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScheduleService } from '../schedule.service';
import { Student } from '../student.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit, OnDestroy {

  students: Student[];
  studentListSubscription: Subscription;
  constructor(private scheduleService: ScheduleService) { }

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
