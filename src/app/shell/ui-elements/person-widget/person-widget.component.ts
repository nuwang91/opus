import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-widget',
  templateUrl: './person-widget.component.html',
  styleUrls: ['./person-widget.component.scss']
})
export class PersonWidgetComponent implements OnInit {

  public person: Person = {
    name: 'Bill Gates',
    usertype: 'Admin',
    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4dm9USa9L-OYLcjgvTjZ5TnfxLRSs1stSugJ2YkRlM48xmg6kw'
  };

  constructor() { }

  public ngOnInit(): void {
  }

}

export interface Person {
  name: string;
  usertype: string;
  picture?: string;
}
