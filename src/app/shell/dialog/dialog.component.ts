import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {

  @Output()
  public close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public ngOnInit(): void {
  }

  public closeDialog(): void {
    this.close.emit(true);
  }

}
