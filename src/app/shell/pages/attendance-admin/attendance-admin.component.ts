import { Component, OnInit , ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit, OnDestroy } from "@angular/core";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { EMPLOYEES } from "../../../../mock-data/mock-employees";
import { PersonInterface } from "../../ui-elements/person-widget/person-widget.component";
import { Observable, fromEvent as observableFrom, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-attendance-admin",
  templateUrl: "./attendance-admin.component.html",
  styleUrls: ["./attendance-admin.component.scss"]
})
export class AttendanceAdminComponent implements OnInit , OnDestroy, AfterViewInit {

  public filter: any = faFilter;
  private listOfEmployees: PersonInterface[] = EMPLOYEES;

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

  public getNumberOfDaysForCurrentMonth(): Array<number> {
    const currentDate: Date = new Date();
    const days: number = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    return Array(days).fill((value: number) => value).map((value: number, index: number) => index + 1);
  }

  public formatDay(day: number): string {
    return day < 10 ? "0" + day : day.toString();
  }

}
