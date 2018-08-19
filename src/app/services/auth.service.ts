import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { tap , shareReplay} from "rxjs/operators";

import { User } from "../models";

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    public acceptInvitation(): any {
        return null;
    }

    public changePassword(): any {
        return null;
    }

    public forgotPassword(): any {
        return null;
    }

    public inviteViaMail(): any {
        return null;
    }

    public login(username: string, password: string): any {
        return this.http.post<any>(`${config.apiUrl}/webapi/auth/login`, {username, password })
        .pipe(
             tap(res => this.setSession),
             shareReplay()
        );
    }

    private setSession( authResult: any): any {
        const expiresAt = moment().add(authResult.expiresIn, "second");

        localStorage.setItem("id_token", authResult.idToken);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }

    public logout(): any {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn(): any {
        return moment().isBefore(this.getExpiration());
    }

    public isLoggedOut(): any {
        return !this.isLoggedIn();
    }

    public getExpiration(): any {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }
}
