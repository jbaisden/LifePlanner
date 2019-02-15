import { Appointment } from "src/app/shared/appointment.model";
import { Client } from "src/app/shared/client.model";
import { Schedule } from "src/app/shared/schedule.model";
import { Professional } from "src/app/shared/professional.model";

export class MockCreator {

    constructor() {}

    public getAppointments(scheduleId:number): Appointment[] {

        let appointments: Appointment[] = new Array<Appointment>();

        appointments.push( new Appointment(1,scheduleId,"Thursday", "2 pm"));
        appointments.push( new Appointment(2,scheduleId,"Monday", "10 am"));

        return appointments;
    }

    public getClients(professionalId:number) : Client[] {

        let clients: Client[] = new Array<Client>();
        let client: Client;

        client =  new Client(professionalId,2,"John Foe", "555-687-5309", "jb@gmail.com","35.00", "John Foe notes", "John Foe Initial Synopsis");
        client.schedule = new Schedule(2, 1);
        client.schedule.appointments = this.getAppointments(1);
        clients.push(client);

        client = new Client(professionalId,3,"Xander Foe", "555-333-4244", "xander@gmail.com","55", "xander notes", "Xander Initial Synopsis")
        client.schedule = new Schedule(3, 1);
        client.schedule.appointments = this.getAppointments(1);
        clients.push(client);

        return clients;
        
    }

    public getProfessional(professionalId:number) : Professional {

        let p = new Professional(professionalId, "imapro@gmail.com", "555-111-2232", "The Master");
        p.clients = this.getClients(p.professionalId);

        return p ;

    }

}