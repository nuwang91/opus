import { Component, OnInit, Input } from "@angular/core";
import { CardInterface } from "../card/card.component";

@Component({
  selector: "app-person-widget",
  templateUrl: "./person-widget.component.html",
  styleUrls: ["./person-widget.component.scss"]
})
export class PersonWidgetComponent implements OnInit {

  @Input()
  public listMode: boolean = false;

  @Input()
  public person: PersonInterface = {
    id: "testID",
    name: "Bill Gates",
    usertype: "Admin",
    picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4dm9USa9L-OYLcjgvTjZ5TnfxLRSs1stSugJ2YkRlM48xmg6kw"
  };

  // public person: PersonInterface = {
  //   id: "testID",
  //   name: "Bill Gates",
  //   usertype: "Admin",
  //   picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4dm9USa9L-OYLcjgvTjZ5TnfxLRSs1stSugJ2YkRlM48xmg6kw"
  // };

  constructor() { }

  public ngOnInit(): void {
  }

  // public getType(): string {
  //   return this.listMode ? this.person.designation : this.person.type
  // }

}

export interface PersonInterface {
  id: string;
  name: string;
  usertype: string;
  designation?: string;
  picture?: string;
  events?: Array<CardInterface>;
}
