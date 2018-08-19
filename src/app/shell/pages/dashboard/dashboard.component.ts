import { Component, OnInit } from "@angular/core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { EMPLOYEES } from "../../../../mock-data/mock-employees";
import { PersonInterface } from "../../ui-elements/person-widget/person-widget.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  public filter: any = faFilter;
  private listOfEmployees: PersonInterface[] = EMPLOYEES;

  constructor() { }

  public ngOnInit(): void {
  }

  public get employees(): PersonInterface[] {
    return this.listOfEmployees;
  }

  public trackByEmployeeId(index: number, person: PersonInterface): any {
    return person.id;
  }
}
