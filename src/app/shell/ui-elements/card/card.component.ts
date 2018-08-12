import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {

  public cardData: CardInterface = {
    date: "June 29th 2018",
    mainText: "Task One - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subText: "Project One it is a long established fact that a reader",
    daysleft: 2,
    type: "tasks"
  };

  @Input()
  public card: CardInterface = this.cardData;

  constructor() { }

  public ngOnInit(): void {
  }

  public getColor(): string {
    switch (this.card.type) {
      case "tasks":
          return "lightblue";
          break;
      case "overdue":
          return "red";
          break;
      default:
          return "lightgreen";
          break;
  }
  }

}

export interface CardInterface {
  mainText: string;
  subText: string;
  date: string;
  daysleft?: number;
  type: string;
}
