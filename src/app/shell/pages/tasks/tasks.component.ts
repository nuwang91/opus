import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { CardInterface, CardComponent } from "../../ui-elements/card/card.component";
import { CARDS } from "../../../../mock-data/mock-tasks";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.scss"]
})
export class TasksComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  private allCards: CardInterface[] = CARDS;
  private dialogVisible: boolean = false;

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


  public toggleFlip(card: CardComponent): void {
    if (card.flipState === "inactive") {
      card.flipState = "active";
    } else {
      card.flipState = "inactive";
    }
    this.changeDetectorRef.markForCheck();
  }

  public trackByCardId(index: number, card: CardInterface): any {
    return card.id;
  }

  public addCard(): void {
    this.dialogVisible = !this.dialogVisible;
  }

  public showDialog(): boolean {
    return this.dialogVisible;
  }

  public closeDialog(close: boolean): void {
    if (close) {
      this.addCard();
    }
  }
}
