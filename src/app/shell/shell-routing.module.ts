import { ShellComponent } from "./shell.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TasksComponent } from "./pages/tasks/tasks.component";
import { AttendanceComponent } from "./pages/attendance/attendance.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: ShellComponent },
  { path: "tasks", component: TasksComponent },
  { path: "attendance", component: AttendanceComponent },
  { path: "dashboard", component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class ShellRoutingModule {}

export const routingComponents = [ShellComponent];
