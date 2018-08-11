import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PersonWidgetComponent } from "./person-widget.component";

describe("PersonWidgetComponent", () => {
  let component: PersonWidgetComponent;
  let fixture: ComponentFixture<PersonWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
