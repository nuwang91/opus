import { Component, OnInit } from "@angular/core";
import { faEllipsisV, faComments, faCogs, faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-shell",
  templateUrl: "./shell.component.html",
  styleUrls: ["./shell.component.scss"]
})
export class ShellComponent implements OnInit {

  private navigatorIndex: number = 0;
  public ellipsisV: any = faEllipsisV;
  public comments: any = faComments;
  public cogs: any = faCogs;
  public search: any = faSearch;


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
