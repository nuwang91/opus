import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-attendance",
  templateUrl: "./attendance.component.html",
  styleUrls: ["./attendance.component.scss"]
})
export class AttendanceComponent implements OnInit {

  constructor() { }

  public testOptions: string[] = ["Absent", "Casual", "Annual", "Medical"]

  public ngOnInit(): void {
  }

}
