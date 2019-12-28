import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [
    {
      name: "krishna",
      company: "QAT",
      salary: 1000,
      phone: 7660819937,
      dob: "04/11/1997",
      img:
        "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
    }
  ];
  addEmp() {
    this.users.push({
      name: "krishna",
      company: "QAT",
      salary: 1000,
      phone: 7660819937,
      dob: "04/11/1997",
      img:
        "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg"
    });
  }
  removeEmp(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
