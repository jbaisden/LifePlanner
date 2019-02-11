import { StringifyOptions } from "querystring";

export class Appointment {
    public appointmentId:number;
    public scheduleId:number;
    public dayOfWeek:string;
    public appointmentTime:string;
    public adhocAppointmentDate:StringifyOptions;
}