import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemIndex: number;

  constructor() { }

  ngOnInit() {
  }

  onSave(form: NgForm) {

  }

}
