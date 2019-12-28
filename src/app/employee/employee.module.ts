import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmploginComponent } from "./emplogin/emplogin.component";

@NgModule({
  declarations: [EmploginComponent],
  imports: [CommonModule, FormsModule],
  exports: [EmploginComponent]
})
export class EmployeeModule {}
