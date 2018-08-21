import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DayBoxComponent } from "./day-box.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [DayBoxComponent],
  declarations: [DayBoxComponent]
})
export class DayBoxModule { }
