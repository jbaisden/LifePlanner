
 export class RescheduleDescriptorOptions {
   
    public client: string  = "Client";
    public professional: string  = "Professional";
    public other: string  = "Other";

    public getOptions() :string[] {
      return [ this.client, this.professional, this.other];
    }

  }