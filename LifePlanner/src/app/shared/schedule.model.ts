import { Time } from "@angular/common";
import { Appointment } from "src/app/shared/appointment.model";

export class Schedule {

    public professionalId:number;
    public scheduleId: number;
    public clientId: number;
    public appointments: Appointment[];

    constructor(clientId: number, scheduleId: number) {
        this.scheduleId = scheduleId;
        this.clientId = clientId;
        this.appointments = [];
    }

}

export class DayOfWeekAndTime {
    public dayOfWeek: string;
    public time: Time;
}
