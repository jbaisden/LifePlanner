import { Schedule } from "src/app/shared/schedule.model";

export class Client {
    
    constructor(professionalId:number, clientId:number, name:string,number:string,email:string,
    rate:string,notes:string,initialSynopsis:string) {
        this.professionalId = professionalId;
        this.clientId = clientId;
        this.id = clientId;
        this.name = name;
        this.number = number;
        this.email = email;
        this.rate = rate;
        this.notes = notes;
        this.initialSynopsis = initialSynopsis;
    }
    
    public id:number;
    public professionalId:number;
    public clientId:number;
    public schedule:Schedule;
    public name:string;
    public number:string;
    public email:string;
    public rate:string;
    public notes:string;
    public initialSynopsis:string;
    public photo:string;

    public getNextApt():string {
        return "Monday 4pm";
    }

}