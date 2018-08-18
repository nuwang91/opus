import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {

  @Output()
  public close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public pencilAlt: any = faPencilAlt;
  public trashAlt: any = faTrashAlt;


  public projects: Array<{ id: number, name: string }> = [
    { id: 1, name: "Dialog Mega Run" },
    { id: 2, name: "Kaunas" },
    { id: 3, name: "Pavilnys" },
    { id: 4, name: "Pabradė" },
    { id: 5, name: "Klaipėda" }
  ];

  public users: Array<{ id: number, name: string }> = [
    { id: 1, name: "Nuwan" },
    { id: 2, name: "Chamira" },
    { id: 3, name: "Indika" },
    { id: 4, name: "Lochana" },
    { id: 5, name: "Prabath" }
  ];

  public selectedProject: string;
  public selectedUser: string;

  public ngOnInit(): void {
  }

  public closeDialog(): void {
    this.close.emit(true);
  }

  public editTask(): void {
    console.log("EDIT");
  }

  public deleteTask(): void {
    console.log("DELETE");
  }

}
