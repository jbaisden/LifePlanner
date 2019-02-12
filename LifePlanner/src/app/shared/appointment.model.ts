import { StringifyOptions } from "querystring";

export class Appointment {
    constructor(appointmentId:number,scheduleId:number,dayOfWeek:string,appointmentTime:string) {
        this.appointmentId = appointmentId;
        this.scheduleId = scheduleId;
        this.dayOfWeek = dayOfWeek;
        this.appointmentTime = appointmentTime;
    }

    public appointmentId:number;
    public scheduleId:number;
    public dayOfWeek:string;
    public appointmentTime:string;
    public adhocAppointmentDate:string;
}