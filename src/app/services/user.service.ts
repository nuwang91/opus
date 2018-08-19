import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { User } from "../models";

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    public addUser(user: User): any {
        return this.http.post(`${config.apiUrl}/webapi/users`, user);
    }

    public updateUser(user: User): any {
        return this.http.put(`${config.apiUrl}/webapi/users/` + user.id, user);
    }

    /*
    public activateDeactivateUser(user: User, status: string): any {
        return this.http.get(`${config.apiUrl}/webapi/users/` + status + `/` + user.id);
    }
    */

    public getUserById(id: number): any {
        return this.http.get(`${config.apiUrl}/webapi/users/` + id);
    }

    public getAllUsers(): any {
        return this.http.get<User[]>(`${config.apiUrl}/webapi/users`);
    }

    public getActiveUsers(): any {
        return this.http.get<User[]>(`${config.apiUrl}/webapi/users/active`);
    }

    public getInactiveUsers(): any {
        return this.http.get<User[]>(`${config.apiUrl}/webapi/users/inactive`);
    }
}
