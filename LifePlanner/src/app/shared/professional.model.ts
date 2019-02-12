import { Client } from "src/app/shared/client.model";
import { Payment } from "src/app/shared/payment.model";

export class Professional {

    constructor(professionalId:number, email:string, phone:string, name:string) {}

    
    public professionalId:number;
    public clients:Client[];
    public payments:Payment[];
    public email:string;
    public phone:string;
    public name:string;
    // public rateOptions:RateOptions[];
    // public messageTemplateOptions:MessageTemplateOption[];
}