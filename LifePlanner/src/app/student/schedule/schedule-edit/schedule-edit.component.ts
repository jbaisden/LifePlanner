import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  }

  onSubmit() {
    console.log(this.cancelReasons.Other);
    console.log(this.logSessionForm);
  }

  CancelEdit() {
    this.router.navigate(['student']);
    
  }

}

 class RescheduleDescriptorOptions {
  public Client: string  = "Client";
  public Professional: string  = "Professional";
  public Other: string  = "Other";
}