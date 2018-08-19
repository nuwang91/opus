import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../_models";

@Injectable()
export class LoginService {
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

    public login(): any {
        return null;
    }

    public inviteViaMail(): any {
        return null;
    }

}
