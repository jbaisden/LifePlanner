import { Component, OnInit } from '@angular/core';
import { Professional } from 'src/app/shared/professional.model';
import { MockCreator } from 'src/app/shared/mocker.model';
import { Client } from 'src/app/shared/client.model';
import { ClientService } from 'src/app/client/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  professional:Professional ;
  clients:Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    console.warn("client-list ngOnInit called.");

    let mocker : MockCreator = new MockCreator();
    this.professional = mocker.getProfessional(1);
    this.clients = this.professional.clients;
  }

}
