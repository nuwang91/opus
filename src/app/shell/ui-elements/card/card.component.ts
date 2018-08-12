import { Component, OnInit, Input } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  animations: [trigger("flipState", [
    transition("active => inactive", [
      style({ transform: "rotateY(180deg)" }), animate("500ms ease-out", style({ transform: "rotateY(0deg)" }))
    ]),
    transition("inactive => active", [
      style({ transform: "rotateY(0deg)" }), animate("500ms ease-in", style({ transform: "rotateY(180deg)" }))
    ])
  ])]
})
export class CardComponent implements OnInit {

  public cardData: CardInterface = {
    id: "ID1010",
    date: "June 29th 2018",
    mainText: "Task One - Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    subText: "Project One it is a long established fact that a reader",
    daysleft: 2,
    type: "tasks"
  };

  @Input()
  public card: CardInterface = this.cardData;

  @Input()
  public flipState: string = "inactive";

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

  public getLightColor(): string {
    switch (this.card.type) {
      case "tasks":
        return "lightblue";
        break;
      case "overdue":
        return "#e27676";
        break;
      default:
        return "lightgreen";
        break;
    }
  }

}

export interface CardInterface {
  id: string;
  mainText: string;
  subText: string;
  date: string;
  daysleft?: number;
  type: string;
}
