import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-widget',
  templateUrl: './person-widget.component.html',
  styleUrls: ['./person-widget.component.scss']
})
export class PersonWidgetComponent implements OnInit {

  public personName: string = 'Bill Gates';
  public personType: string = 'Admin';

  constructor() { }

  ngOnInit() {
  }

  

}
