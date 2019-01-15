import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {

  constructor() { }
  @Input() student: Student;
  @Input() index: number;

  ngOnInit() {
  }

}
