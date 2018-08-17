import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AttendanceComponent } from "./attendance.component";
import { ContainerModule } from "../../container/container.module";
import { SelectorModule } from "../../ui-elements/selector/selector.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    SelectorModule,
    MatButtonModule
  ],
  exports: [AttendanceComponent],
  declarations: [AttendanceComponent]
})
export class AttendanceModule { }
