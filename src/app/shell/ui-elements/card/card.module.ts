import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardComponent } from "./card.component";
import { SliderModule } from "../slider/slider.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    SliderModule,
    FontAwesomeModule
  ],
  exports: [CardComponent],
  declarations: [CardComponent]
})
export class CardModule { }
