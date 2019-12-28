import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[color]"
})
export class CoustomDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.background = "red";
  }
  @HostBinding("style.background") background = "green";
  @HostListener("mouseenter") mouseenter() {
    this.background = "yellow";
  }
  @HostListener("mouseleave") mouseleave() {
    this.background = "red";
  }
  //   @HostListener("click") clickEvent() {
  //     alert("krishna");
  //   }
}
