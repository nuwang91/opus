import { Component, OnInit, Input } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";
import { faExclamationTriangle, faCommentAlt, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

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

  public exclamationTriangle: any = faExclamationTriangle;
  public commentAlt: any = faCommentAlt;
  public checkSquare: any = faCheckSquare;


  private _card: CardInterface;

  @Input()
  public small: boolean = false;

  // @Input()
  // public card: CardInterface = this.cardData;

  @Input()
  public set card(card: CardInterface) {
    this._card = card;
  }

  public get card(): CardInterface {
    return this._card;
  }

  @Input()
  public flipState: string = "inactive";

  constructor() { }

  public ngOnInit(): void {
  }

  public getColor(): string {
    switch (this.card.type) {
      case "tasks":
        return "#56C1DE";
      case "overdue":
        return "#EB554A";
      default:
        return "#62C47A";
    }
  }

  public getLightColor(): string {
    switch (this.card.type) {
      case "tasks":
        return "lightblue";
      case "overdue":
        return "#e27676";
      default:
        return "lightgreen";
    }
  }

  public getDaysLeft(): string {
    if (this.card.type !== "completed") {
      if (this.card.daysleft && this.card.daysleft > 1) {
        return this.card.daysleft + " Days Left";
      } else if (this.card.daysleft && this.card.daysleft === 1) {
        return this.card.daysleft + " Day Left";
      } else {
        return "";
      }
    } else {
      return "Task Completed";
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
