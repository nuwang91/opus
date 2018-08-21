import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttendanceAdminComponent } from "./attendance-admin.component";
import { ContainerModule } from "../../container/container.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PersonWidgetModule } from "../../ui-elements/person-widget/person-widget.module";
import { DayBoxModule } from "../../ui-elements/day-box/day-box.module";

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    FontAwesomeModule,
    PersonWidgetModule,
    DayBoxModule
  ],
  exports: [AttendanceAdminComponent],
  declarations: [AttendanceAdminComponent]
})
export class AttendanceAdminModule { }
