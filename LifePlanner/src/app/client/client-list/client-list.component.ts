import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/shared/professional.model';
import { MockCreator } from 'src/app/shared/mocker.model';
import { Client } from 'src/app/shared/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  professional:Professional ;
  clients:Client[];

  constructor() { }

  ngOnInit() {
    let mocker : MockCreator = new MockCreator();
    this.professional = mocker.getProfessional(1);
    this.clients = this.professional.clients;
  }

}
