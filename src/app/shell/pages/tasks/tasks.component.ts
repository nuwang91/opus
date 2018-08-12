import { Component, OnInit } from "@angular/core";
import { CardInterface } from "../../ui-elements/card/card.component";
import { CARDS } from "../../../../mock-data/mock-tasks";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {

  constructor() { }

  private allCards: CardInterface[] = CARDS;

  public ngOnInit(): void {

  }

  public getTasks(): CardInterface[] {
    return this.allCards.filter((card: CardInterface) => card.type === "tasks");
  }

  public getOverdue(): CardInterface[] {
    return this.allCards.filter((card: CardInterface) => card.type === "overdue");
  }

  public getCompleted(): CardInterface[] {
    return this.allCards.filter((card: CardInterface) => card.type === "completed");
  }

}
