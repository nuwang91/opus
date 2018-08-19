import { Component, OnInit , ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit, OnDestroy } from "@angular/core";
import { faFilter, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { EMPLOYEES } from "../../../../mock-data/mock-employees";
import { PersonInterface } from "../../ui-elements/person-widget/person-widget.component";
import { CardInterface, CardComponent } from "../../ui-elements/card/card.component";
import { Observable, fromEvent as observableFrom, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";


@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  public filter: any = faFilter;
  public plusCircle: any = faPlusCircle;
  private listOfEmployees: PersonInterface[] = EMPLOYEES;
  private personId: number | undefined = undefined;
  private dialogVisible: boolean = false;

  private ngVerticalListPeople$: Observable<Event>;
  private ngVerticalListEvents$: Observable<Event>;
  private destroy$: Subject<void> = new Subject();

  private scrollingPeopleList: boolean = false;
  private scrollingEventsList: boolean = false;

  @ViewChild("ngVerticalListPeople")
  public ngVerticalListPeople: ElementRef;

  @ViewChild("ngVerticalListEvents")
  public ngVerticalListEvents: ElementRef;


  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  public ngAfterViewInit(): void {
    if (this.ngVerticalListPeople.nativeElement && this.ngVerticalListEvents.nativeElement) {
      this.ngVerticalListPeople$ = observableFrom(this.ngVerticalListPeople.nativeElement, "scroll");
      this.ngVerticalListEvents$ = observableFrom(this.ngVerticalListEvents.nativeElement, "scroll");
      this.subscribeToVerticalListPeopleScroll();
      this.subscribeToVerticalListEventsScroll();
    }
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

  private subscribeToVerticalListPeopleScroll(): void {
    this.ngVerticalListPeople$.pipe(takeUntil(this.destroy$)).subscribe((event: Event) => {
      if (!this.scrollingEventsList) {
        this.scrollingPeopleList = true;
        this.ngVerticalListEvents.nativeElement.scrollTop = event.srcElement.scrollTop;
        this.changeDetectorRef.markForCheck();
      } else {
        this.scrollingEventsList = false;
      }
    });
  }

  private subscribeToVerticalListEventsScroll(): void {
    this.ngVerticalListEvents$.pipe(takeUntil(this.destroy$)).subscribe((event: Event) => {
      if (!this.scrollingPeopleList) {
        this.scrollingEventsList = true;
        this.ngVerticalListPeople.nativeElement.scrollTop = event.srcElement.scrollTop;
        this.changeDetectorRef.markForCheck();
      } else {
        this.scrollingPeopleList = false;
      }
    });
  }
}
