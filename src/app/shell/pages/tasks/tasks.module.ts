import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerModule } from "../../container/container.module";
import { TasksComponent } from "./tasks.component";
import { CardModule } from "../../ui-elements/card/card.module";

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    CardModule
  ],
  exports: [TasksComponent],
  declarations: [TasksComponent]
})
export class TasksModule { }
