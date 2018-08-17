import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerModule } from "../../container/container.module";
import { TasksComponent } from "./tasks.component";
import { CardModule } from "../../ui-elements/card/card.module";
import { DialogModule } from "../../dialog/dialog.module";

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    CardModule,
    DialogModule
  ],
  exports: [TasksComponent],
  declarations: [TasksComponent]
})
export class TasksModule { }
