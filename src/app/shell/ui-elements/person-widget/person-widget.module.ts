import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PersonWidgetComponent } from "./person-widget.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PersonWidgetComponent],
  declarations: [PersonWidgetComponent]
})
export class PersonWidgetModule { }
