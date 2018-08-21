import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-day-box",
  templateUrl: "./day-box.component.html",
  styleUrls: ["./day-box.component.scss"]
})
export class DayBoxComponent implements OnInit {

  @Input()
  public day: string;

  @Input()
  public color: string = "#62C47A";

  constructor() { }

  public ngOnInit(): void {
  }

}
