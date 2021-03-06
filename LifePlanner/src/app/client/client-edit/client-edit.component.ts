import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/shared/client.model';
import { ClientService } from 'src/app/client/client.service';
import { ActivatedRoute, Params, Route } from '@angular/router';


@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  constructor(private clientService:ClientService,
     private route:ActivatedRoute) { }

  client: Client ;
  clientForm : FormGroup; 
  isEditMode : boolean = false;
  editIndex: number;

  ngOnInit() {
    console.warn("client-edit ngOnInit called.");
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.clientService.getClient(params.get('id')).subscribe(
         (c:Client) => {
          console.log("Client returned from clientService:");
          console.log(c);
          this.client = c;
          console.log("After getting client from clientService");
      this.initFromClient();
          
      })   
      });
  }

  initFromClient() {
    this.clientForm = new FormGroup({
    name: new FormControl(this.client.name),
    phone: new FormControl(this.client.number),
    email: new FormControl(this.client.email),
    rate: new FormControl(this.client.rate),
    notes: new FormControl(this.client.notes),
    initialSynopsis: new FormControl(this.client.initialSynopsis),
  });
    
  }

  onSubmit() {
    this.client = this.clientForm.value;
    this.clientService.setClient(this.client);
    console.warn(this.client);
  }

}
