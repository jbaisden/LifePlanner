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
     private croute:ActivatedRoute) { }

  client: Client ;
  n:string = this.client.name;
  clientForm : FormGroup; 
  isEditMode : boolean = false;
  editIndex: number;

  ngOnInit() {
    console.warn("client-edit ngOnInit called.");
    this.croute.paramMap.subscribe(params => {
      console.log(params.get('id'))
       this.clientService.getClient(params.get('id')).subscribe(
         (c:Client) => {
          console.log(c);
          this.client = c;
      })   
      });
      this.initFromClient();
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
    console.warn(this.client);
  }

}
