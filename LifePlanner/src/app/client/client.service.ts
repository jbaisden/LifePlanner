import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService  {

  API_URL: string = "/api/";
  Clients_EndPoint: string = "clients";

  constructor(private http: HttpClient) {
    console.warn("client.service.ts");
    
   }

  public setClient(client:Client) {
    return this.http.put(`${this.API_URL + this.Clients_EndPoint}`, client) 

  }

  public getClients() {
    console.warn("getClients() in client.service.ts called");
    return this.http.get<Client[]>(this.API_URL + this.Clients_EndPoint );
  }

  getClient(clientId){
    return this.http.get<Client>(`${this.API_URL + this.Clients_EndPoint}/${clientId}`) 
   }

}
