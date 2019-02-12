import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RescheduleDescriptorOptions } from 'src/app/shared/reschdule.descriptor.options.model';
import { MockCreator } from 'src/app/shared/mocker.model';

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.css']
})
export class ScheduleEditComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  editMode = false;
  editItemIndex: number;
  editItem: {};
  cancelReasons: RescheduleDescriptorOptions = new RescheduleDescriptorOptions();
  logSessionForm = new FormGroup({
    Client: new FormControl(''),
    SessionDate: new FormControl(''),
    Notes: new FormControl(''),
    RescheduleDescriptor: new FormControl('')
  });

  ngOnInit() {
    let mc : MockCreator = new MockCreator();
    console.log(mc.getProfessional(1));
  }

  onSubmit() {
    console.log(this.cancelReasons.other);
    console.log(this.logSessionForm);
  }

  CancelEdit() {
    this.router.navigate(['student']);
  }

}
