import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  @ViewChild('f') slForm: NgForm;
  editMode = false;
  editItemIndex: number;
  editItem: {};

  ngOnInit() {
  }

  CancelEdit() {
    this.router.navigate(['student']);
  }

}
