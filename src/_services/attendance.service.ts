import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Attendance, User } from "../_models";

@Injectable()
export class AttendanceService {
    constructor(private http: HttpClient) { }

    public getSummaryAttendanceAllUsers(): any {
        return this.http.get<Attendance[]>(`${config.apiUrl}/webapi/attend/thismonth`);
    }

    public getAllAttendance(): any {
        return this.http.get<Attendance[]>(`${config.apiUrl}/webapi/attend`);
    }

    public getAttendanceByUserThisMonth(userId: number): any {
        return this.http.get<Attendance[]>(`${config.apiUrl}/webapi/attend` + userId);
    }

    public getTodayAttendance(userId: number): any {
        return this.http.get<Attendance[]>(`${config.apiUrl}/webapi/attend/today`);
    }

    /*
    public markAttendance(attendance: Attendance): any {
        return this.http.put(`${config.apiUrl}/webapi/attend/` + attendance.id, attendance);
    }
    */

    /*
    public updateAttendance(attendance: Attendance): any {
        return this.http.put(`${config.apiUrl}/webapi/attend/` + attendance.id, attendance);
    }
    */





}
