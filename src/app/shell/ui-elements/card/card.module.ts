import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { SliderModule } from "../slider/slider.module";

@NgModule({
  imports: [
    CommonModule,
    SliderModule
  ],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class CardModule { }
