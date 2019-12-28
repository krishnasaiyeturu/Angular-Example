import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-emplogin",
  templateUrl: "./emplogin.component.html",
  styleUrls: ["./emplogin.component.css"]
})
export class EmploginComponent implements OnInit {
  a =
    "https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742__480.jpg";
  isActive = "true";
  color = "red";
  keyupEvent(event) {
    if (event.keyCode === 13) {
      console.log(event.target.value); //javascript
    }
  }

  angularEvent(event) {
    console.log(event.target.value); // angular with event object
  }
  emailEvent(x) {
    console.log(x.value);
  }

  constructor() {}

  ngOnInit() {}
}
