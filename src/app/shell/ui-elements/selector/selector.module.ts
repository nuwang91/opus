import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SelectorComponent } from "./selector.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SelectorComponent],
  declarations: [SelectorComponent]
})
export class SelectorModule { }
