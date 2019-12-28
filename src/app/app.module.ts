import { FormsModule } from "@angular/forms";
import { EmployeeModule } from "./employee/employee.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { headerComponent } from "./header.component";
import { UsersComponent } from "./users/users.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./auth/home/home.component";
import { PagenotfoundComponent } from "./auth/pagenotfound/pagenotfound.component";
import { CoustomDirective } from "./coustom.directive";
import { TestDirective } from "./test.directive";

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    HomeComponent,
    PagenotfoundComponent,
    CoustomDirective,
    TestDirective
  ],
  imports: [
    BrowserModule,
    EmployeeModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "users", component: UsersComponent },
      { path: "register", component: RegisterComponent },
      { path: "**", component: PagenotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
