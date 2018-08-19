import { Component, OnInit , ChangeDetectorRef } from "@angular/core";
import { faFilter, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { EMPLOYEES } from "../../../../mock-data/mock-employees";
import { PersonInterface } from "../../ui-elements/person-widget/person-widget.component";
import { CardInterface, CardComponent } from "../../ui-elements/card/card.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  public filter: any = faFilter;
  public plusCircle: any = faPlusCircle;
  private listOfEmployees: PersonInterface[] = EMPLOYEES;
  private personId: number | undefined = undefined;
  private dialogVisible: boolean = false;

  // private showAddIcon: boolean = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
  }

  public get employees(): PersonInterface[] {
    return this.listOfEmployees;
  }

  public trackByEmployeeId(index: number, person: PersonInterface): any {
    return person.id;
  }

  public trackByEventId(index: number, event: CardInterface): any {
    return event.id;
  }

  public toggleFlip(card: CardComponent): void {
    if (card.flipState === "inactive") {
      card.flipState = "active";
    } else {
      card.flipState = "inactive";
    }
    this.changeDetectorRef.markForCheck();
  }

  public onMouseOver(personId: number): void {
    this.personId = personId;
  }

  public compareIds(personId: number): boolean {
    if (this.personId === personId) {
      return true;
    } else {
      return false;
    }
  }

  public onMouseLeave(): void {
    this.personId = undefined;
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
