import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttendanceComponent } from "./attendance.component";
import { ContainerModule } from "../../container/container.module";

@NgModule({
  imports: [
    CommonModule,
    ContainerModule
  ],
  exports: [AttendanceComponent],
  declarations: [AttendanceComponent]
})
export class AttendanceModule { }
