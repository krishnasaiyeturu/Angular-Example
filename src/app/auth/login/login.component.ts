import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  checkModel(username) {
    console.log(username);
  }
  submit(x){
    console.log(x);
  }
  constructor() {}

  ngOnInit() {}
}
