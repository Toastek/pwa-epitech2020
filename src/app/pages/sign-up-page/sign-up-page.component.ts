import { UsersService } from "./../../services/users-service/users.service";
import { Component, OnInit } from "@angular/core";
import { SwPush } from "@angular/service-worker";
import { Md5 } from "ts-md5/dist/md5";

@Component({
  selector: "app-sign-up-page",
  templateUrl: "./sign-up-page.component.html",
  styleUrls: ["./sign-up-page.component.scss"]
})
export class SignUpPageComponent implements OnInit {
  inputMail: String = "";
  inputPassword = "";
  inputUsername = "";
  pushSub: Object;

  constructor(public usersService: UsersService, public swPush: SwPush) {}

  ngOnInit() {}

  async getPushSubscription() {
    if (this.swPush.isEnabled) {
      await this.swPush
        .requestSubscription({
          serverPublicKey:
            "BDH86ebmKxR6Q5uIiflAHpEiQRNOsIyFt6hpSS-m_8ga1Ha3-O3lQxqqhn74sIQyOhp55e_d3pADosgsrgzYHBw"
        })
        .then(subscription => {
          console.log("subscription =", subscription);
          this.pushSub = subscription;
          console.log("stringify:", this.pushSub.toString());
        })
        .catch(console.error);
    }
  }

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
      this.getPushSubscription().then(() => {
        console.log("pushSub", this.pushSub);
        const md5 = new Md5();
        this.usersService.createUser(
          this.inputUsername,
          this.inputPassword,
          md5.appendStr(this.inputPassword).end(),
          this.pushSub.toString()
        );
      });
    }
  }
}
