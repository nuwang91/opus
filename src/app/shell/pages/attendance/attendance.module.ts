import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttendanceComponent } from "./attendance.component";
import { ContainerModule } from "../../container/container.module";
import { SelectorModule } from "../../ui-elements/selector/selector.module";
import { MatButtonModule } from "@angular/material/button";
import { DlDateTimePickerDateModule } from "angular-bootstrap-datetimepicker";


@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    SelectorModule,
    MatButtonModule,
    DlDateTimePickerDateModule
  ],
  exports: [AttendanceComponent],
  declarations: [AttendanceComponent]
})
export class AttendanceModule { }
