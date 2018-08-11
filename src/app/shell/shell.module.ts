import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShellComponent } from "./shell.component";
import { PersonWidgetModule } from "./ui-elements/person-widget/person-widget.module";


@NgModule({
  imports: [
    CommonModule,
    PersonWidgetModule
  ],
  exports: [ ShellComponent ],
  declarations: [ ShellComponent ]
})
export class ShellModule { }
