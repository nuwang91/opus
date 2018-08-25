import { ShellModule } from "./shell/shell.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { HomeComponent } from "./home/home.component";

import { AuthService } from "./services";
import { AuthInterceptor, fakeBackendProvider } from "./helpers";
import { AuthGuard } from "./auth.guard";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    HttpClientModule,
    AppRoutingModule,
    ShellModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
