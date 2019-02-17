import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RescheduleDescriptorOptions } from 'src/app/shared/reschdule.descriptor.options.model';

@Component({
  selector: 'app-log-session',
  templateUrl: './log-session.component.html',
  styleUrls: ['./log-session.component.css']
})
export class LogSessionComponent implements OnInit {

  // @Input() professionalId: number;
  // @Input() clientId: number;

  clients: string[] =  ["John Foe", "Xander"];
  rescheduleOptions: string[] = new RescheduleDescriptorOptions().getOptions();

  logSessionForm = new FormGroup({
    name: new FormControl(this.clients[0]),
    sessionDate: new FormControl(),
    notes: new FormControl(),
    isMilestone: new FormControl(false),
    rescheduleOption: new FormControl(),
  });


  constructor() { }

  ngOnInit() {
    console.warn("log-session ngOnInit called.");
  }

  onSubmit() {
    console.warn(this.logSessionForm.value);
  }


}
