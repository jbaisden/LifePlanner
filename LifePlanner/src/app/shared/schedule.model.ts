import { Time } from "@angular/common";

export class Schedule {

    public scheduleId: number;
    public studentId: number;
    public schdule: DayOfWeekAndTime[];

    constructor(studentId: number, scheduleId: number) {
        this.scheduleId = scheduleId;
        this.studentId = studentId;
        this.schdule = [];
    }

}

export class DayOfWeekAndTime {
    public dayOfWeek: string;
    public time: Time;
}
