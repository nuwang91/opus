import { Routes, RouterModule, Router } from "@angular/router";

import { AuthGuard } from "./guards";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";


const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full", canActivate: [AuthGuard] },
    { path: "home", component: HomeComponent },
    { path: "login", component: LoginComponent },

    // otherwise redirect to home
    { path: "**", redirectTo: "" }
];

export const routing = RouterModule.forRoot(appRoutes);
