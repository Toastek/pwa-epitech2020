import { environment } from "./../../../environments/environment";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { USERS_ENDPOINT } from "../../constants/api_endpoints";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(httpClient: HttpClient) {}

  createUser(username, password, email, token) {}

  sendSubscriptionToTheServer(subscription) {
    //return this.HttpClient.post(SERVER_URL, subscription);
  }

  // postUserToken(uid, userToken, data) {
  //   const request = new HttpRequest(
  //     "POST",
  //     environment.API_ADDRESS + USERS_ENDPOINT,
  //     data
  //   );
  // }

  loginUser(username, password) {}
}
