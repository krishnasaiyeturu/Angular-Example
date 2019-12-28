import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appTest]"
})
export class TestDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.background = "blue";
  }
}
