import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.scss"]
})
export class SelectorComponent implements OnInit {

  constructor() { }

  @Input()
  public options: string[] = [];

  public ngOnInit(): void {
  }

}
