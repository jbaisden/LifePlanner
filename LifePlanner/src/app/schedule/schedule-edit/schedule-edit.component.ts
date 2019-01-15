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

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
  }

  onSave(form: NgForm) {
    const value = form.value;
    this.scheduleService.addStudent(value.student);
    this.slForm.resetForm();
  }

}
