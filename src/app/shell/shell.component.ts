import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {

  private navigatorIndex: number = 0;

  constructor() { }

  public ngOnInit(): void {
  }

  public getIndex(): number {
    return this.navigatorIndex;
  }

  public navigatorChange(changedTo: number): void {
    this.navigatorIndex = changedTo;
  }
}
