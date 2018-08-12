import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellComponent } from "./shell.component";
import { PersonWidgetModule } from "./ui-elements/person-widget/person-widget.module";
import { TasksModule } from "./pages/tasks/tasks.module";


@NgModule({
  imports: [
    CommonModule,
    PersonWidgetModule,
    TasksModule
  ],
  exports: [ShellComponent],
  declarations: [ShellComponent]
})
export class ShellModule { }
