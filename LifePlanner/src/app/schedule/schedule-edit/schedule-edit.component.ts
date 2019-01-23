import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScheduleService } from '../schedule.service';
import { Student } from '../student.model';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemIndex: number;
  editItem: Student;

  constructor(private scheduleDataService: ScheduleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("in ngOnInit in ScheduleEditComponent");
    this.route.params.subscribe(
      (params: Params) => {
        this.editItem = this.scheduleDataService.getStudent(+params['id']);
        console.log(+params['id']);
        if (this.editItem) {
          console.log(this.editItem);
          setTimeout(() => {
            this.slForm.setValue({ name: this.editItem.name, parent: "" });
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
    this.scheduleDataService.addStudent(value.student);
    this.slForm.resetForm();
  }

}
