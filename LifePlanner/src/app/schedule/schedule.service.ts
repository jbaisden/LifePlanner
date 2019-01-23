import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private students: Student[] = [
    new Student('Bob', 1),
    new Student('James', 2),
    new Student('Ashley', 3)
  ];

  studentsChanged = new Subject<Student[]>();

  constructor() { }

  getStudents() {
    return this.students.slice();
  }

  getStudent(id: number): Student {
    var student = this.students.find((s: Student) => s.id == id);
    return student;
  }

  getStudentId() {
    return this.students
      .map(student => student.id) //get array of just student id's
      .reduce((a, b) => a >= b ? a : b) + 1; //apply function to each element
  }

  updateStudent(name: string, id: number) {
    var student = this.students.find(stud => stud.id == id);
    console.log(id);
    student.name = name;
    this.studentsChanged.next(this.students.slice());
  }

  addStudent(name: string) {
    this.students.push(new Student(name, this.getStudentId()));
    this.studentsChanged.next(this.students.slice());
  }

}
