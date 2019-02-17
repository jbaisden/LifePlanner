import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-client-item',
  templateUrl: './client-item.component.html',
  styleUrls: ['./client-item.component.css']
})
export class ClientItemComponent implements OnInit {

  @Input() client: Client;
  
  constructor() { }

  ngOnInit() {
    console.warn("client-item ngOnInit called.");

  }

}
