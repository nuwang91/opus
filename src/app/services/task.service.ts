import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Task } from "../models";

@Injectable()
export class TaskService {
    constructor(private http: HttpClient) { }

    public addTask(task: Task): any {
        return this.http.post(`${config.apiUrl}/webapi/tasks/`, task);
    }

    public updateTask(task: Task): any {
        return this.http.put(`${config.apiUrl}/webapi/users/` + task.id, task);
    }

    public getTaskById(id: number): any {
        return this.http.get(`${config.apiUrl}/webapi/tasks/` + id);
    }

    public getAllTasks(): any {
        return this.http.get<Task[]>(`${config.apiUrl}/webapi/tasks`);
    }

    public getCompletedTasks(): any {
        return this.http.get<Task[]>(`${config.apiUrl}/webapi/tasks/completed`);
    }

    public getIncompletedTasks(): any {
        return this.http.get<Task[]>(`${config.apiUrl}/webapi/tasks/incompleted`);
    }

    public getTasksByProject(projectId: number): any {
        return this.http.get<Task[]>(`${config.apiUrl}/webapi/tasks/project/` + projectId);
    }

    public deleteTask(id: number): any {
        return this.http.delete(`${config.apiUrl}/webapi/tasks/` + id);
    }
}
