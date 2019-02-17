import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/shared/client.model';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {


  constructor() { }
  client: Client = new Client(1,1,"j", "123-123-3321", "jb@gmail.com", "$34.00", "test", "init synopsis") ;
  n:string = this.client.name;
  clientForm = new FormGroup({
    name: new FormControl(this.client.name),
    phone: new FormControl(this.client.number),
    email: new FormControl(this.client.email),
    rate: new FormControl(this.client.rate),
    notes: new FormControl(this.client.notes),
    initialSynopsis: new FormControl(this.client.initialSynopsis),
  });

  ngOnInit() {
  }

  initFromClient() {
    // this.clientForm.setValue()
  }

  onSubmit() {
    this.client = this.clientForm.value;
    console.warn(this.client);
  }

}
