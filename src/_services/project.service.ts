import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Project } from "../_models";

@Injectable()
export class ProjectService {
    constructor(private http: HttpClient) { }

    /*This can be wrong doesn't have webapp part*/
    public getProjectByName(name: string): any {
        return this.http.get(`${config.apiUrl}/projects/` + name);
    }

    public addProject(project: Project): any {
        return this.http.post(`${config.apiUrl}/webapi/projects/`, project);
    }

    public getAllProjects(): any {
        return this.http.get<Project[]>(`${config.apiUrl}/webapi/projects`);
    }

    public updateTask(project: Project): any {
        return this.http.put(`${config.apiUrl}/webapi/projects/` + project.name, project);
    }
}
