import { Component } from "@angular/core";
import { SwPush } from "@angular/service-worker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "pwa-epitech2020";

  constructor(swPush: SwPush) {
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey:
            "BDH86ebmKxR6Q5uIiflAHpEiQRNOsIyFt6hpSS-m_8ga1Ha3-O3lQxqqhn74sIQyOhp55e_d3pADosgsrgzYHBw"
        })
        .then(subscription => {
          console.log(subscription);
        })
        .catch(console.error);
    }
  }
}
