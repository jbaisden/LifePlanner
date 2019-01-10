import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ScheduleEditComponent } from './schedule/schedule-edit/schedule-edit.component';
import { ScheduleListComponent } from './schedule/schedule-list/schedule-list.component';
import { ScheduleItemComponent } from './schedule/schedule-item/schedule-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleEditComponent,
    ScheduleListComponent,
    ScheduleItemComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
