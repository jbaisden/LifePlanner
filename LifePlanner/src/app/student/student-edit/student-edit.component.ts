import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from '../student.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { StudentService } from 'src/app/student/student.service';


@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemIndex: number;
  editItem: Student;

  constructor(private scheduleDataService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in ngOnInit in ScheduleEditComponent");
    this.route.params.subscribe(
      (params: Params) => {
        this.editItem = this.scheduleDataService.getStudent(+params['id']);
        this.editItemIndex = this.editItem.id;
        if (this.editItem) {
          this.editMode = true;
          setTimeout(() => {
            this.slForm.setValue({ name: this.editItem.name, parent: "", id: this.editItem.id });
          }, 50);
        }
      }
    );
  }

  CancelEdit() {
    this.router.navigate(['list']);
  }

  onSave(form: NgForm) {
    //form.value = Student object
    const value = form.value;
    console.log(value);
    if (this.editItem) {
      this.scheduleDataService.updateStudent(value.name, value.id);
    } else {
      this.scheduleDataService.addStudent(value.name);
    }
    this.router.navigate(['list']);
    // this.slForm.resetForm();
  }

}
