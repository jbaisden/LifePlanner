import { RescheduleDescriptorOptions } from "src/app/shared/reschdule.descriptor.options.model";

export class Session {
    public sessionId: number;
    public clientId: number;
    public sessionDateTime: any;
    public notes:string;
    public isMilestone:boolean;
    public rescheduleOptions:RescheduleDescriptorOptions;

}