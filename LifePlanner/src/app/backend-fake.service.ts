import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/client.model';
import { Schedule } from 'src/app/shared/schedule.model';
import { Appointment } from 'src/app/shared/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class BackendFakeService implements InMemoryDbService {

  public getAppointments(scheduleId:number): Appointment[] {

    let appointments: Appointment[] = new Array<Appointment>();

    appointments.push( new Appointment(1,scheduleId,"Thursday", "2 pm"));
    appointments.push( new Appointment(2,scheduleId,"Monday", "10 am"));

    return appointments;
}

  constructor() {
    console.warn("backend-fake.service.ts called");
   }

  createDb(){
    console.warn("createDb called");
    
    let clients: Client[] = new Array<Client>();
    let client: Client;

    // let  contacts =  [
    //   {  id:  1,  name:  'Contact 1', email: 'contact1@email.com' },
    //   {  id:  2,  name:  'Contact 2', email: 'contact2@email.com' },
    //   {  id:  3,  name:  'Contact 3', email: 'contact3@email.com' },
    //   {  id:  4,  name:  'Contact 4', email: 'contact4@email.com' }
    // ];
    
    client =  new Client(1,2,"John Foe", "555-687-5309", "jb@gmail.com","35.00", "John Foe notes", "John Foe Initial Synopsis");
    client.schedule = new Schedule(2, 1);
    client.schedule.appointments = this.getAppointments(1);
    clients.push(client);

    console.warn("control test of instanceof:");
    console.warn(client instanceof Client);

    client = new Client(1,3,"Xander Foe", "555-333-4244", "xander@gmail.com","55", "xander notes", "Xander Initial Synopsis")
    client.schedule = new Schedule(3, 1);
    client.schedule.appointments = this.getAppointments(1);
    clients.push(client);

   return {clients};
    
  }
}
