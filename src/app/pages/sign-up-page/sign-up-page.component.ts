import { UsersService } from "./../../services/users-service/users.service";
import { Component, OnInit } from "@angular/core";
import { SwPush } from "@angular/service-worker";

@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.component.html",
  styleUrls: ["./sign-up-page.component.scss"]
})
export class SignUpPageComponent implements OnInit {
  inputMail: String = "";
  inputPassword: String = "";
  inputUsername: String = "";

  constructor(public usersService: UsersService, public swPush: SwPush) {}

  ngOnInit() {}

  onSignUp() {
    if (
      this.inputUsername === "" ||
      this.inputUsername === undefined ||
      this.inputMail === "" ||
      this.inputMail === undefined ||
      this.inputPassword === "" ||
      this.inputPassword === undefined
    ) {
      console.log("Veuillez remplir correctement tous les champs");
    } else {
      console.log("else");
      if (this.swPush.isEnabled) {
        this.swPush
          .requestSubscription({
            serverPublicKey:
              "BDH86ebmKxR6Q5uIiflAHpEiQRNOsIyFt6hpSS-m_8ga1Ha3-O3lQxqqhn74sIQyOhp55e_d3pADosgsrgzYHBw"
          })
          .then(subscription => {
            console.log('toto', subscription);
            // this.usersService.createUser(this.inputUsername, this.inputPassword, this.inputMail, subscription);
          })
          .catch(console.error);
      }
    }
  }
}
