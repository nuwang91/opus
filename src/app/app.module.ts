import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginModule } from "./login/login.module";
import { ShellModule } from "./shell/shell.module";
import { DlDateTimePickerDateModule } from "angular-bootstrap-datetimepicker";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    ShellModule,
    DlDateTimePickerDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
