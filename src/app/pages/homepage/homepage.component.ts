import { UsersService } from "./../../services/users-service/users.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"]
})
export class HomepageComponent implements OnInit {
  inputMail: String = "";
  inputPassword: String = "";

  constructor(public usersService: UsersService) {}

  ngOnInit() {}

  onLogin() {
    if (
      this.inputMail === "" ||
      this.inputMail === undefined ||
      this.inputPassword === "" ||
      this.inputPassword === undefined
    ) {
      console.log("Veuillez remplir correctement tous les champs");
    } else {
      this.usersService.loginUser(this.inputMail, this.inputPassword);
    }
  }
}
