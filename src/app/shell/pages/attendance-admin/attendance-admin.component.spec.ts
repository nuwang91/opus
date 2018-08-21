import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AttendanceAdminComponent } from "./attendance-admin.component";

describe("AttendanceAdminComponent", () => {
  let component: AttendanceAdminComponent;
  let fixture: ComponentFixture<AttendanceAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendanceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
