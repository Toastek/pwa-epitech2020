import { SignUpPageComponent } from "./pages/sign-up-page/sign-up-page.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInPageComponent } from "./pages/sign-in-page/sign-in-page.component";
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: "", component: SignUpPageComponent },
  { path: "home", component: HomepageComponent },
  { path: "signin", component: SignInPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
