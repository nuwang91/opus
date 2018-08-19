import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { ContainerModule } from "../../container/container.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PersonWidgetModule } from "../../ui-elements/person-widget/person-widget.module";
import { CardModule } from "../../ui-elements/card/card.module";
import { DialogModule } from "../../dialog/dialog.module";

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    FontAwesomeModule,
    PersonWidgetModule,
    CardModule,
    DialogModule
  ],
  exports: [DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
