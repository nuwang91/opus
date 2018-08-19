import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellComponent } from "./shell.component";
import { PersonWidgetModule } from "./ui-elements/person-widget/person-widget.module";
import { TasksModule } from "./pages/tasks/tasks.module";
import { ShellRoutingModule } from "./shell-routing.module";
import { AttendanceModule } from "./pages/attendance/attendance.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DashboardModule } from "./pages/dashboard/dashboard.module";

@NgModule({
  imports: [
    CommonModule,
    PersonWidgetModule,
    TasksModule,
    ShellRoutingModule,
    AttendanceModule,
    FontAwesomeModule,
    DashboardModule
  ],
  exports: [ShellComponent],
  declarations: [ShellComponent]
})
export class ShellModule { }
