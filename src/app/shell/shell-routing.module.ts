import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./pages/tasks/tasks.component";
import { AttendanceComponent } from "./pages/attendance/attendance.component";

const routes: Routes = [
  { path: "tasks", component: TasksComponent },
  { path: "attendance", component: AttendanceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ShellRoutingModule { }
