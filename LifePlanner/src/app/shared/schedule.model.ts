import { Time } from "@angular/common";
import { Appointment } from "src/app/shared/appointment.model";

export class Schedule {

    public professionalId: number;
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

    public getSortId(): number {
        var sortIdvalue: number;
        switch (this.dayOfWeek) {
            case "Monday":
                sortIdvalue = 1; break;
            case "Tuesday":
                sortIdvalue = 2; break;
            case "Wednesday":
                sortIdvalue = 3; break;
            case "Thursday":
                sortIdvalue = 4; break;
            case "Friday":
                sortIdvalue = 5; break;
            case "Saturday":
                sortIdvalue = 6; break;
            case "Sunday":
                sortIdvalue = 7; break;
            default:
                sortIdvalue = 8; break;
        }

        return sortIdvalue;
    }
}
