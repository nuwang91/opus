import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { ShellModule } from "./shell/shell.module";
import { HomeComponent } from "./home/home.component";

import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AuthService } from "./services";
import { AuthGuard } from "./guards/";
import { routing } from "./app.routing";

import { AuthInterceptor, fakeBackendProvider } from "./helpers";

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
    ShellModule,
    routing
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
