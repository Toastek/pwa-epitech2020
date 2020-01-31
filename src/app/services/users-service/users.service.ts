import { environment } from "./../../../environments/environment";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { USERS_ENDPOINT } from "../../constants/api_endpoints";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(public httpClient: HttpClient) {}

  createUser(username, password, email, pushSub) {
    this.httpClient.post("http://localhost:3000/users", {
      username: username,
      password: password,
      email: email,
      pushSub: pushSub
    });
  }

  sendSubscriptionToTheServer(subscription) {
    //return this.HttpClient.post(SERVER_URL, subscription);
  }

  loginUser(username, password) {}
}
