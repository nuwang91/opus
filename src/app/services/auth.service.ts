import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { map, tap , shareReplay} from "rxjs/operators";

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

    public login (email: string, password: string): any {
        return this.http.post<any>(`/webapi/auth/login`, { email: email, password: password })
            .pipe(map(user => {
                // login successful if there"s a jwt token in the response
                if (user && user.idToken) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem("currentUser", JSON.stringify(user));
                }

                return user;
            }));
    }

    public logout(): any {
        // remove user from local storage to log user out
        localStorage.removeItem("currentUser");
    }




    /*
    public login(email: string, password: string): any {
        return this.http.post<any>(`/webapi/auth/login`, {email, password })
        .pipe(
             tap(res => this.setSession),
             shareReplay()
        );
    }

    private setSession( authResult: any): any {
        const expiresAt = moment().add(authResult.expiresIn, "second");

        localStorage.setItem("id_token", authResult.idToken);
        console.log(authResult.idToken);
        console.log(localStorage.getItem("id_token"));
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
    */
}
