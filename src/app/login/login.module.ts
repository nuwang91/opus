import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { LoginComponent } from "./login.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent]
})
export class LoginModule { }
