import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./pages/tasks/tasks.component";
// import { AttendanceComponent } from "./pages/attendance/attendance.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AttendanceAdminComponent } from "./pages/attendance-admin/attendance-admin.component";

const routes: Routes = [
  { path: "tasks", component: TasksComponent },
  // { path: "attendance", component: AttendanceComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "attendance", component: AttendanceAdminComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ShellRoutingModule { }
