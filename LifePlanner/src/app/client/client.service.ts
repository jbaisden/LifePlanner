import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService  {

  constructor() { }

  public setClient(client:Client) {

  }

  public getClient(professionalId:number, clientId:number) : Client[] | Client {
    return new Client(1,2,"","","","","","");
  }

  

}
