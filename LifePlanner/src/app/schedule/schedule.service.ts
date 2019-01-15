import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private students: Student[] = [
    new Student('Bob'),
    new Student('James'),
    new Student('Ashley')
  ];

  studentsChanged = new Subject<Student[]>();

  constructor() { }

  getStudents() {
    return this.students.slice();
  }

  addStudent(name: string) {
    this.students.push(new Student(name));
    this.studentsChanged.next(this.students.slice());
  }

}
