import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService  {

  API_URL: string = "/api/";
  constructor(private http: HttpClient) {
    console.warn("client.service.ts");
    
   }

  public setClient(client:Client) {

  }

  public getClient(professionalId:number, clientId:number) : Client[] | Client {
    return new Client(1,2,"","","","","","");
  }

  public getClients() {
    console.warn("getClients() in client.service.ts called");
    return this.http.get<Client[]>(this.API_URL + 'clients');
  }

  

}
