import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SliderComponent } from "./slider.component";

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports: [SliderComponent],
  declarations: [SliderComponent]
})
export class SliderModule { }
