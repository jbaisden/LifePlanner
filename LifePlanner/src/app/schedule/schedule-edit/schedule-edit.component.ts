import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScheduleService } from '../schedule.service';


@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemIndex: number;

  constructor(private scheduleDataService: ScheduleService) { }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    //form.value = Student object
    const value = form.value;
    this.scheduleDataService.addStudent(value.student);
    this.slForm.resetForm();
  }

}
